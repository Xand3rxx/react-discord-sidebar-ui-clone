import { FaFire, FaPoo } from "react-icons/fa";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import SidebarIcon from "./SideBarIcon";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-success shadow-lg">
      <SidebarIcon icon={<FaFire size="28" />} tooltip="Home" />
      <SidebarIcon icon={<BsPlus size="32" />} tooltip="Add Friend" />
      <SidebarIcon icon={<BsFillLightningFill size="28" />} />
      <SidebarIcon icon={<FaPoo size="20" />} />
      <Divider />
      <SidebarIcon icon={<BsGearFill size="22" />} tooltip="Settings" />
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
