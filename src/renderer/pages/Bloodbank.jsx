import React, { useRef } from "react";
import { CirclePlus, Trash } from "lucide-react";
import { Button } from "../components/ui/button";
import BloodInfoCard from "../components/reusable/BloodInfoCard";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import FormField from "../components/reusable/FormField";
import SubmitButton from "../components/reusable/SubmitButton";
import { toast } from "sonner";
import { bloodTypes } from "../lib/utils";

const BloodBank = () => {
  const addFormRef = useRef(null);
  const removeFormRef = useRef(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [removeDialogOpen, setRemoveDialogOpen] = React.useState(false);
  const { user_id } = JSON.parse(localStorage.getItem("user"));

  const [shouldRefetch, setShouldRefetch] = React.useState(false);

  const handleAddBlood = async (e) => {
    e.preventDefault();
    const formData = new FormData(addFormRef.current);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      type: "add_blood_donation",
      payload: {
        blood_type_id: data.blood_type_id,
        quantity: parseFloat(data.quantity),
        user_passport_number: data.passportNumber,
        user_name: data.name,
        head_nurse_id: user_id,
      },
    };

    window.electron.sendTCPMessage(payload);
    window.electron.onTCPMessage((response) => {
      if (response.type === "add_blood_donation") {
        if (response.status === "success") {
          toast.success("Blood added successfully!");
          setShouldRefetch((prev) => !prev);
          setDialogOpen(false); // Close the dialog
        } else {
          toast.error(`Error: ${response.message}`);
        }
      }
    });
    addFormRef.current.reset();
  };

  const handleRemoveBlood = async (e) => {
    e.preventDefault();
    const formData = new FormData(removeFormRef.current);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      type: "remove_blood_inventory",
      payload: {
        blood_type_id: data.blood_type_id,
        quantity: parseFloat(data.amount),
        head_nurse_id: user_id,
      },
    };

    window.electron.sendTCPMessage(payload);
    window.electron.onTCPMessage((response) => {
      if (response.type === "remove_blood_inventory") {
        if (response.status === "success") {
          toast.success("Blood removed successfully!");
          setShouldRefetch((prev) => !prev);
          setRemoveDialogOpen(false); // Close the dialog
        } else {
          toast.error(`Error: ${response.message}`);
        }
      }
    });
    removeFormRef.current.reset();
  };

  return (
    <section className="flex flex-col gap-6">
      <h1 className="font-semibold text-xl">Blood Bank:</h1>
      <BloodInfoCard headNurseId={user_id} refetch={shouldRefetch} />
      <div className="flex items-center justify-end gap-5">
        {/* Add Blood Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => setDialogOpen(true)}
              className="bg-success flex items-center w-[149px] h-[46px] gap-x-2 text-lg font-semibold hover:bg-emerald-600"
            >
              <CirclePlus /> Add
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form
              ref={addFormRef}
              className="flex flex-col"
              onSubmit={handleAddBlood}
            >
              <DialogHeader className="text-black">
                <DialogTitle>Add blood</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-2 mt-7">
                <FormField
                  name="blood_type_id"
                  label="Blood type"
                  bgColor="bg-white"
                  textColor="text-black"
                  labelColor="text-black"
                  type="select"
                  options={bloodTypes}
                  required
                  borderColor="border-[#B9B9B9]"
                />
                <FormField
                  name="quantity"
                  label="Amount(in ml)"
                  bgColor="bg-white"
                  textColor="text-black"
                  labelColor="text-black"
                  type="text"
                  inputmode="decimal"
                  required
                  borderColor="border-[#B9B9B9]"
                />
                <FormField
                  name="name"
                  label="Donor's name"
                  bgColor="bg-white"
                  textColor="text-black"
                  labelColor="text-black"
                  type="text"
                  required
                  borderColor="border-[#B9B9B9]"
                />
                <FormField
                  name="passportNumber"
                  label="Passport ID"
                  bgColor="bg-white"
                  textColor="text-black"
                  labelColor="text-black"
                  type="text"
                  required
                  borderColor="border-[#B9B9B9]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <SubmitButton text="Add to blood bank" />
                <DialogFooter>
                  <Button
                    onClick={() => setDialogOpen(false)}
                    className="bg-transparent text-black hover:bg-gray-100 border border-black text-[17px] w-full"
                  >
                    Cancel
                  </Button>
                </DialogFooter>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Remove Blood Dialog */}
        <Dialog open={removeDialogOpen} onOpenChange={setRemoveDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => setRemoveDialogOpen(true)}
              className="bg-secondary flex items-center w-[149px] h-[46px] gap-x-2 text-lg font-semibold hover:bg-red-700"
            >
              <Trash /> Remove
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form
              ref={removeFormRef}
              className="flex flex-col gap-3"
              onSubmit={handleRemoveBlood}
            >
              <DialogHeader className="text-black">
                <DialogTitle>Remove blood</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-2 mt-7">
                <FormField
                  name="blood_type_id"
                  label="Blood type"
                  bgColor="bg-white"
                  textColor="text-black"
                  labelColor="text-black"
                  type="select"
                  options={bloodTypes}
                  required
                  borderColor="border-[#B9B9B9]"
                />
                <FormField
                  name="amount"
                  label="Amount (ml)"
                  bgColor="bg-white"
                  textColor="text-black"
                  labelColor="text-black"
                  type="text"
                  required
                  borderColor="border-[#B9B9B9]"
                />
              </div>
              <SubmitButton text="Remove from blood bank" />
              <DialogFooter>
                <Button
                  onClick={() => setRemoveDialogOpen(false)}
                  className="bg-transparent text-black hover:bg-gray-100 border border-black text-[17px] w-full"
                >
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default BloodBank;
