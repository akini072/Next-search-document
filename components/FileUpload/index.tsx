// components/FileUpload.tsx

import React, { useState } from "react";
import mammoth from "mammoth";
import { setProductList } from "@/store/reducers/productSlice";
import { useDispatch } from "react-redux";
import { Checkbox, FileInput, Label } from "flowbite-react";

const FileUpload: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (
      file.type !==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      setError("Please upload a valid .docx file.");
      return;
    }

    setError(null); // Reset error

    try {
      const arrayBuffer = await file.arrayBuffer();
      const { value } = await mammoth.extractRawText({ arrayBuffer });

      const json = JSON.parse(
        value
          .split("")
          .filter((char) => {
            return char.trim() !== "" && char !== "\n" && char !== " ";
          })
          .join("")
      );
      dispatch(setProductList(json));
    } catch (err) {
      console.error(err);
      setError("Failed to process the .docx file.");
    }
  };

  return (
    <div>
      <div className="mb-2">
        <Checkbox />
        &nbsp;&nbsp;
        <Label
          value="工程ファイルを新規に読み込む"
        />
      </div>
      <FileInput color="gray" accept=".docx" onChange={handleFileChange} multiple />

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;
