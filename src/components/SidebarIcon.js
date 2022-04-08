const SidebarIcon = ({ icon, tooltip }) => {
  return (
    <div
      className={
        tooltip === "Home" ? "sidebar-icon-purple group" : "sidebar-icon group"
      }
    >
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {tooltip} 💡
      </span>
    </div>
  );
};

SidebarIcon.defaultProps = {
  tooltip: "tooltip",
};

export default SidebarIcon;
