import { Button } from "../ui/button";
import { CirclePlus, Edit2 } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FormField from "../reusable/FormField";

import { bloodTypes } from "../../lib/utils";
import SubmitButton from "../reusable/SubmitButton";

const HospitalDialog = ({ title, buttonText }) => (
  <Dialog>
    <DialogTrigger>
      {buttonText ? (
        <Button className="bg-success flex items-center px-10 py-5 gap-x-2 text-lg font-semibold hover:bg-emerald-600">
          <CirclePlus /> {buttonText}
        </Button>
      ) : (
        <Edit2 color="#D21F3C" className="cursor-pointer" size={20} />
      )}
    </DialogTrigger>
    <DialogContent>
      <div className="flex flex-col">
        <DialogHeader className="text-black">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5 mt-7">
          <FormField
            name="hospitalName"
            label="Hospital name"
            bgColor="bg-white"
            textColor="text-black"
            type="text"
            options={bloodTypes}
            required
            borderColor="border-[#B9B9B9]"
          />
          <div className="flex gap-4">
            <FormField
              name="region"
              label="Region"
              bgColor="bg-white"
              textColor="text-black"
              type="text"
              required
              borderColor="border-[#B9B9B9]"
            />
            <FormField
              name="phone"
              label="Phone"
              bgColor="bg-white"
              textColor="text-black"
              type="text"
              required
              borderColor="border-[#B9B9B9]"
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
          />
          <FormField
            name="headNurse"
            label="Head nurse"
            bgColor="bg-white"
            textColor="text-black"
            type="text"
            required
            borderColor="border-[#B9B9B9]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <SubmitButton text={title} />
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button className="bg-transparent text-black hover:bg-gray-100 border border-black text-[17px] w-full">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default HospitalDialog;
