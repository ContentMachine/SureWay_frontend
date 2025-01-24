"use client";

import classes from "./FileUploadInput.module.css";
import upload from "../../assets/Images/upload.svg";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Close from "@/assets/SvgIcons/Close";

type FileUploadInputTypes = {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
};

const FileUploadInput = ({ files, setFiles }: FileUploadInputTypes) => {
  // States
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  // Utils

  // Handle drag over
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  // Handle drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files); // Convert FileList to Array
      setFiles((prevFiles) => [...prevFiles, ...droppedFiles]); // Append new files
      e.dataTransfer.clearData();
    }

    setIsDraggingOver(false);
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // Append new files
    }
  };

  //   Handle files array filter
  const filterFiles = (name: string) => {
    const filteredFiles = files?.filter((data) => {
      return data?.name !== name;
    });
    setFiles(filteredFiles);
  };

  return (
    <div className={classes.container}>
      <p>Please upload what the product should look like</p>
      <div
        className={classes.uploadContainer}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={
          isDraggingOver
            ? { border: "2px dashed #fdd602" }
            : { border: "1px solid #eaeaea" }
        }
      >
        <Image src={upload} alt="Upload" />

        <h4>
          Drag and drop files or <label htmlFor="file">Browse</label>
        </h4>

        <input type="file" id="file" onChange={handleFileChange} />

        <p>Supported formates: JPEG, PNG</p>
      </div>

      {files?.length > 0 && (
        <div className={classes.uploaded}>
          <h4>Uploaded File</h4>

          {files?.map((data, i) => {
            return (
              <div key={i}>
                <span>{data?.name}</span>
                <Close onClick={() => filterFiles(data?.name)} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FileUploadInput;
