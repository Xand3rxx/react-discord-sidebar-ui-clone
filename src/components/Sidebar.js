import { FaFire } from "react-icons/fa";
import { BsPlus, BsDiscord, BsGearFill, BsDownload } from "react-icons/bs";
import SidebarIcon from "./SideBarIcon";

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
    bg-white dark:bg-gray-900 shadow-lg"
    >
      <SidebarIcon icon={<BsDiscord size="25" />} tooltip="Home" />
      <SidebarIcon icon={<BsPlus size="32" />} tooltip="Add Friend" />
      <SidebarIcon icon={<FaFire size="28" tooltip="Trending Topics" />} />
      <SidebarIcon icon={<BsDownload size="26" />} tooltip="Download" />
      <Divider />
      <SidebarIcon icon={<BsGearFill size="22" />} tooltip="Settings" />
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
