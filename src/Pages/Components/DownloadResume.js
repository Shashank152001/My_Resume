import React from "react";
import "./Stylesheets/DownloadResume.css";
import { Button, Tooltip } from "antd";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DownloadResume = () => {
  const OpenPDFInNewTab = () => {
    fetch('ShashankVarshneyResume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'ShashankVarshneyResume.pdf';
          alink.click();
      })
  })
  };

  return (
    <Tooltip
      placement="left"
      title="Download Resume"
      className="download-resume-tooltip"
      trigger="hover"
    >
      <Button
        className="download-resume"
        onClick={OpenPDFInNewTab}
        aria-label="Download Resume"
      >
        <FileDownloadIcon fontSize="medium" />
      </Button>
    </Tooltip>
  );
};

export default DownloadResume;