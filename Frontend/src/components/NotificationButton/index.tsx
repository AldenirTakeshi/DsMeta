import React from "react";
import icon from "../../assets/Notification-icon.svg";
import "./styles.css";

const NotificationButton = () => {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="Notificar" />
    </div>
  );
};

export default NotificationButton;
