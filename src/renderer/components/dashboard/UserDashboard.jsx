import banner from "../../assets/banner.svg";

const UserDashboard = () => {
  return (
    <div>
      <img
        src={banner}
        alt="banner"
        className="w-full h-[240px] object-cover rounded-lg"
      />
      <h1>User</h1>
    </div>
  );
};

export default UserDashboard;
