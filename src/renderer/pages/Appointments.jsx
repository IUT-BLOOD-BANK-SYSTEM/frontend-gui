import React from "react";
import { Button } from "../components/ui/button";
import { CirclePlus, LucideSortDesc } from "lucide-react";
import TableData from "../components/reusable/TableData";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import FormField from "../components/reusable/FormField";
import SubmitButton from "../components/reusable/SubmitButton";
import useGetAppointmentHistory from "../hooks/useGetAppointmentHistory";
import useGetUser from "../hooks/useGetUser";
import { toast } from "sonner";

const columnData = [
  { label: "Date", key: "appointment_date" },
  { label: "Time", key: "time" },
  { label: "Passport ID", key: "donor[passport_number]" },
  { label: "Donor's name", key: "donorName" },
  { label: "Status", key: "status" },
];

const Appointments = () => {
  const { appointmentHistory } = useGetAppointmentHistory();
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef(null);
  const user = useGetUser("get_by_id_head_nurse");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const [year, month, day] = data.date.split("-").map(Number);
    const [hours, minutes] = data.time.split(":").map(Number);

    const appointmentDate = new Date(
      Date.UTC(year, month - 1, day, hours, minutes)
    );

    const payload = {
      type: "create_appointment",
      payload: {
        unregistered_name: data.fullName,
        unregistered_passport_number: data.id,
        appointment_date: appointmentDate.toISOString(),
        hospital_id: user?.hospital?.id,
      },
    };
    window.electron.sendTCPMessage(payload);
    window.electron.onTCPMessage((response) => {
      if (response.type !== "create_appointment") return;
      if (response.status === "success") {
        toast.success("Appointment Succesufully Created");
        formRef.current.reset();
      } else {
        toast.error(`Failed to create appointment :): ${response.message}`);
      }

      setLoading(false);
    });
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">
          Scheduled appointments for donation
        </h1>

        <Dialog>
          <DialogTrigger>
            <Button className="bg-success flex items-center  gap-x-2 text-base py-4 font-semibold hover:bg-emerald-600">
              <CirclePlus /> Schedule
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form
              className="flex flex-col "
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <DialogHeader className={`text-black`}>
                <DialogTitle>Schedule appointment</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-2 gap-2 mt-7">
                <FormField
                  name="fullName"
                  label="Full name"
                  bgColor="bg-white"
                  textColor="text-black"
                  labelColor={"text-black"}
                  type="text"
                  required={true}
                  borderColor="border-[#B9B9B9]"
                />

                <FormField
                  name="id"
                  label="Passport ID"
                  bgColor="bg-white"
                  textColor="text-black"
                  labelColor={"text-black"}
                  type="text"
                  required={true}
                  borderColor="border-[#B9B9B9]"
                />

                <FormField
                  name="date"
                  label="Date of appointment"
                  bgColor="bg-white"
                  textColor="text-black"
                  labelColor={"text-black"}
                  type="date"
                  required={true}
                  borderColor="border-[#B9B9B9]"
                />

                <FormField
                  name="time"
                  label="Time of appointment"
                  bgColor="bg-white"
                  textColor="text-black"
                  labelColor={"text-black"}
                  type="time"
                  required={true}
                  borderColor="border-[#B9B9B9]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <SubmitButton
                  text={loading ? "Submitting..." : "Submit"}
                  disabled={loading}
                />
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button className="bg-transparent text-black hover:bg-gray-100 border border-black text-[17px] w-full">
                      Cancel
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-7">
        <TableData
          columns={columnData}
          rows={appointmentHistory}
          filterColumnKey="status"
          hasFilter={true}
        />
      </div>
    </section>
  );
};

export default Appointments;
