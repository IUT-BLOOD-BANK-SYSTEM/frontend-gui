import React from "react";
import banner from "../assets/banner.svg";
import TableData from "../components/reusable/TableData";
import HospitalDialog from "../components/reusable/HospitalDialog";
import useGetHospital from "../hooks/useGetHospital";
import { toast } from "sonner";

const columnData = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Region", key: "region" },
  { label: "Head nurse", key: "head_nurse_id" },
  { label: "Phone", key: "phone_number" },
  { label: "Address", key: "address" },
  { label: "Action", key: "action" },
];

const AdminDashboard = () => {
  const [shouldRefetch, setShouldRefetch] = React.useState(false);
  const { hospitals } = useGetHospital(shouldRefetch);
  const [formData, setFormData] = React.useState({
    id: "",
    name: "",
    region_id: "",
    head_nurse_id: "",
    phone_number: "",
    address: "",
  });
  const [originalData, setOriginalData] = React.useState(null);
  const [isChanged, setIsChanged] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClick = (id) => {
    const hospital = hospitals.find((hospital) => hospital.id === id);
    const data = {
      id: hospital.id,
      name: hospital.name,
      region_id: hospital.region.id,
      head_nurse_id: hospital.head_nurse.id,
      phone_number: hospital.phone_number,
      address: hospital.address,
    };
    setFormData(data);
    setOriginalData(data);
    setDialogOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onClose = () => {
    setFormData({
      id: "",
      name: "",
      region_id: "",
      head_nurse_id: "",
      phone_number: "",
      address: "",
    });
    setOriginalData(null);
    setDialogOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.electron.sendTCPMessage({
      type: "update_hospital",
      payload: formData,
    });

    window.electron.onTCPMessage((response) => {
      if (response.type !== "update_hospital") return;
      if (response.status === "success") {
        toast.success("Hospital updated successfully");
        onClose();
        setShouldRefetch((prev) => !prev);
      } else {
        toast.error("Failed to update Hospital");
      }
    });
  };

  React.useEffect(() => {
    if (originalData) {
      const hasChanges = Object.keys(formData).some(
        (key) => formData[key] !== originalData[key]
      );
      setIsChanged(hasChanges);
    }
  }, [formData, originalData]);

  const hospitalData = hospitals.map((hospital) => {
    return {
      id: hospital.id,
      name: hospital.name,
      region: hospital.region.name,
      head_nurse_id: hospital.head_nurse.id || "N/A",
      phone_number: hospital.phone_number,
      address: hospital.address,
      action: (
        <div className="flex gap-5">
          <HospitalDialog
            formData={formData}
            onClick={() => handleClick(hospital.id)}
            onSubmit={handleSubmit}
            title="Edit hospital data"
            onChange={handleChange}
            onClose={onClose}
            isChanged={isChanged}
            isOpen={dialogOpen}
          />
        </div>
      ),
    };
  });

  return (
    <section className="flex flex-col gap-16">
      <div>
        <img
          src={banner}
          alt="banner"
          className="w-full h-[240px] object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-10">
        <h1 className="font-semibold text-xl">Hospitals</h1>
        <div className="flex flex-col gap-10 items-end ">
          <div className="w-full">
            <TableData
              columns={columnData}
              rows={hospitals.length > 0 ? hospitalData : []}
            />
          </div>

          <HospitalDialog title="Add hospital" buttonText="Add" />
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
