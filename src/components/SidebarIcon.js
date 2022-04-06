const SidebarIcon = ({ icon, tooltip}) => {
  return (
    <div className="sidebar-icon group ">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{tooltip} 💡</span>
    </div>
  );
};

SidebarIcon.defaultProps = {
    tooltip: "tooltip",
  };

export default SidebarIcon;
