import React, { useState } from "react";

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    url: string;
  } | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileInfo(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setFileInfo({ name: selectedFile.name, url: fileUrl });
      // const formData = new FormData();
      // formData.append("file", selectedFile);

      // // You can send the formData to your backend for further processing
      // // For example, you might use fetch or a library like axios

      // // Clear the selected file after upload
      // setSelectedFile(null);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
      {fileInfo && (
        <div>
          <h2> Uploaded File:</h2>
          <p>File Name: {fileInfo.name}</p>
          <p>
            <a href={fileInfo.url} target="_blank" rel="noopener noreferrer">
              Open File
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
