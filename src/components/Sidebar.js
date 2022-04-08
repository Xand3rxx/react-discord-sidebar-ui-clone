import { FaFire, FaDiscord } from "react-icons/fa";
import { BsPlus, BsGearFill, BsDownload } from "react-icons/bs";
import SidebarIcon from "./SideBarIcon";

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
    bg-white dark:bg-gray-900 shadow-lg"
    >
      <SidebarIcon icon={<FaDiscord size="32" />} tooltip="Home" />
      <SidebarIcon icon={<BsPlus size="32" />} tooltip="Create Your Server" />
      <SidebarIcon icon={<FaFire size="24" tooltip="Trending Topics" />} />
      <SidebarIcon icon={<BsDownload size="24" />} tooltip="Download" />
      <Divider />
      <SidebarIcon icon={<BsGearFill size="24" />} tooltip="Settings" />
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
