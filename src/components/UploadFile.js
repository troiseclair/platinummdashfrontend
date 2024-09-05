import React, { useEffect, useState } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import axios from "axios";

export default function UploadFile({ imageData, imageMessage }) {
  const [imgUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    imageData(imgUrl);
    imageMessage(message);
  }, [imgUrl, message]);

  const getUploadParams = ({ meta }) => {
    console.log("getUploadParamss", meta);
    return { url: "https://httpbin.org/post" }
  }

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log("handelChangeStatus", status, meta, file)
  }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta))
    allFiles.forEach(f => f.remove())
  }
  return (
    <>
      <div className="dropzone">
        <Dropzone
          maxFiles={1}
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          accept="image/*"
        />
      </div>
    </>
  )
}