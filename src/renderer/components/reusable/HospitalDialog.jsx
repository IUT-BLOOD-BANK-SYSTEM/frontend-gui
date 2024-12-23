import { Button } from "../ui/button";
import { CirclePlus, Edit2 } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FormField from "../reusable/FormField";
import SubmitButton from "../reusable/SubmitButton";
import useGetRegions from "../../hooks/useGetRegions";

const HospitalDialog = ({
  title,
  buttonText,
  formData,
  onSubmit,
  onClick,
  onChange,
  onClose,
  isChanged,
  isOpen,
}) => {
  const regions = useGetRegions();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogTrigger>
        {buttonText ? (
          <Button
            onClick={onClick}
            className="bg-success flex items-center px-10 py-5 gap-x-2 text-lg font-semibold hover:bg-emerald-600"
          >
            <CirclePlus /> {buttonText}
          </Button>
        ) : (
          <Edit2
            onClick={onClick}
            color="#D21F3C"
            className="cursor-pointer"
            size={20}
          />
        )}
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={onSubmit} className="flex flex-col">
          <DialogHeader className="text-black">
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-5 mt-7">
            <FormField
              name="name"
              label="Hospital name"
              bgColor="bg-white"
              textColor="text-black"
              type="text"
              required
              borderColor="border-[#B9B9B9]"
              labelColor={"text-black"}
              defaultValue={formData?.name}
              handleChange={onChange}
            />
            <div className="flex gap-4">
              <FormField
                name="region_id"
                label="Region"
                bgColor="bg-white"
                textColor="text-black"
                type="select"
                options={regions}
                required
                borderColor="border-[#B9B9B9]"
                labelColor={"text-black"}
                defaultValue={formData?.region_id}
                handleChange={onChange}
              />
              <FormField
                name="phone_number"
                label="Phone"
                bgColor="bg-white"
                textColor="text-black"
                type="text"
                required
                borderColor="border-[#B9B9B9]"
                labelColor={"text-black"}
                defaultValue={formData?.phone_number}
                handleChange={onChange}
              />
            </div>
            <FormField
              name="address"
              label="Address"
              bgColor="bg-white"
              textColor="text-black"
              type="text"
              required
              borderColor="border-[#B9B9B9]"
              labelColor={"text-black"}
              defaultValue={formData?.address}
              handleChange={onChange}
            />
            <FormField
              name="head_nurse_id"
              label="Head nurse ID"
              bgColor="bg-white"
              textColor="text-black"
              type="text"
              borderColor="border-[#B9B9B9]"
              labelColor={"text-black"}
              defaultValue={formData?.head_nurse_id}
              handleChange={onChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <SubmitButton disabled={!isChanged} text={title} />
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button
                  onClick={onClose}
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
  );
};

export default HospitalDialog;
