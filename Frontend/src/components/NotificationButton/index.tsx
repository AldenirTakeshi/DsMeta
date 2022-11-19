import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import icon from "../../assets/Notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
  saleId: number;
};

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    toast.info("SMS enviado com sucesso");
  });
}

const NotificationButton = ({ saleId }: Props) => {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
};

export default NotificationButton;
