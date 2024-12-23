import React, { useRef } from "react";
import { CirclePlus, Trash } from "lucide-react";
import { Button } from "../components/ui/button";
import BloodInfoCard from "../components/reusable/BloodInfoCard";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import FormField from "../components/reusable/FormField";
import SubmitButton from "../components/reusable/SubmitButton";
import useGetBloods from "../hooks/useGetBloods";
import { toast } from "sonner";

const BloodBank = () => {
  const addFormRef = useRef(null);
  const removeFormRef = useRef(null);
  const addDialogCloseRef = useRef(null);
  const removeDialogCloseRef = useRef(null);
  const { bloods } = useGetBloods();
  const { user_id } = JSON.parse(localStorage.getItem("user"));

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
          addDialogCloseRef.current.click(); // Close the dialog
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
          removeDialogCloseRef.current.click(); // Close the dialog
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
      <BloodInfoCard headNurseId={user_id} />
      <div className="flex items-center justify-end gap-5">
        <Dialog>
          <DialogTrigger>
            <Button className="bg-success flex items-center w-[149px] h-[46px] gap-x-2 text-lg font-semibold hover:bg-emerald-600">
              <CirclePlus /> Add
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form ref={addFormRef} className="flex flex-col" onSubmit={handleAddBlood}>
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
                  options={bloods}
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
                  <DialogClose asChild>
                    <Button
                      ref={addDialogCloseRef}
                      className="bg-transparent text-black hover:bg-gray-100 border border-black text-[17px] w-full"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger>
            <Button className="bg-secondary flex items-center w-[149px] h-[46px] gap-x-2 text-lg font-semibold hover:bg-red-700">
              <Trash /> Remove
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form ref={removeFormRef} className="flex flex-col gap-3" onSubmit={handleRemoveBlood}>
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
                  options={bloods}
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
                <DialogClose asChild>
                  <Button
                    ref={removeDialogCloseRef}
                    className="bg-transparent text-black hover:bg-gray-100 border border-black text-[17px] w-full"
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default BloodBank;
