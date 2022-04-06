import { FaFire, FaPoo } from 'react-icons/fa';
import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import SidebarIcon from './SidebarIcon'

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-success shadow-lg">
        <SidebarIcon icon={<FaFire size="28" />} tooltip="Home" />
        <SidebarIcon icon={<BsPlus size="32" />} tooltip="Add Friend" />
        <SidebarIcon icon={<BsFillLightningFill size="28" />} />
        <SidebarIcon icon={<FaPoo size="20" />}  />

    </div>
  );
};

export default Sidebar;
