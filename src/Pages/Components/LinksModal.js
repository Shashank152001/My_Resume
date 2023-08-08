import React from "react";
import { Modal } from "antd";
import "./Stylesheets/LinksModal.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const LinksModal = (props) => {
  const handleCancel = () => {
    props.setIsModalOpen(false);
  };
  return (
    <Modal
      title="Project Links"
      open={props.isModalOpen}
      onCancel={handleCancel}
      footer={null}
      destroyOnClose
      keyboard
      className="project-links-modal"
    >
      {props.links.map((data, idx) => (
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          key={idx}
          className="project-links-modal-link"
        >
          {data.name} <OpenInNewIcon fontSize="small"/>
        </a>
      ))}
    </Modal>
  );
};

export default LinksModal;
