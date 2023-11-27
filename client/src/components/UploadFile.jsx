import React, { useState } from "react";
import { uploadCloud } from "../assets/uploadcloud";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF", "PDF", "DOCX", "PPT"];

function UploadFile({ setFile }) {
  const [onDrop, setOnDrop] = useState(false);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div className="cursor-pointer">
      <FileUploader
        className="relative flex h-[200px] w-[200px]"
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        dropMessageStyle={{ display: "none" }}
        onDraggingStateChange={(drop) => {
          setOnDrop(drop);
        }}
      >
        {onDrop && (
          <span
            className={`absolute inline-flex h-[200px]  w-full rounded-full bg-light  duration-100 animate-ping-fast`}
          ></span>
        )}
        <span
          className={`relative inline-flex rounded-full flex-col gap-2 h-[200px] w-[200px] border justify-center items-center ${
            !onDrop ? "border-body" : "bg-body"
          } `}
        >
          <div className="w-20 h-20">
            {uploadCloud({ color: onDrop ? "#84A7A1" : "#2E8A99" })}
          </div>
          {/* <img
            src={uploadCloud({ color: onDrop ? "#84A7A1" : "#2E8A99" })}
            alt=""
          /> */}
          <p
            className={`text-base capitalize text-${onDrop ? "light" : "body"}`}
          >
            Click or Drop file
          </p>
        </span>
      </FileUploader>
    </div>
  );
}

export default UploadFile;
