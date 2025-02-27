"use client";

import { ChangeEventHandler, useState } from "react";

interface Props {
  accept: string;
  onFileSelected: (file: File) => void;
  children?: React.ReactNode;
  maxSize?: number;
}

type FileStatus = {
  type: "error" | "success" | "empty";
  message: string;
};

export default function FileUploader({
  accept,
  onFileSelected,
  children,
  maxSize = 5,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<FileStatus>({
    type: "empty",
    message: "",
  });

  const handleDragEnter = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) =>
    event.preventDefault();

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];
    handleFile(file);
  };

  const handleFile = (file: File | undefined) => {
    try {
      if (!file) throw new Error("No se ha seleccionado ningún archivo");
      validateFile(file);

      setStatus({
        type: "success",
        message: `Archivo cargado correctamente`,
      });

      onFileSelected(file);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Ocurrio un error desconocido";
      setStatus({ type: "error", message: errorMessage });
    }
  };

  const validateFile = (file: File) => {
    const acceptedTypes = accept.split(",").map((type) => type.trim());

    if (file.size > 1024 * 1024 * maxSize)
      throw new Error(`El archivo no puede ser mayor a ${maxSize}MB`);

    const isValidType = acceptedTypes.some((type) => {
      if (type.startsWith("."))
        return file.name.toLowerCase().endsWith(type.toLowerCase());

      return file.type.match(new RegExp(type.replace("*", ".*")));
    });

    if (!isValidType) throw new Error(`El tipo de archivo no es válido.`);
  };

  return (
    <div className="w-full">
      <div
        className={`
          relative w-full min-h-32 border-dashed border-2 rounded-md 
          flex flex-col items-center justify-center p-4
          transition-colors duration-200
          ${isDragging ? "border-blue-400 bg-blue-50" : "border-gray-300"}
        `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        {children}

        <input
          type="file"
          accept={accept}
          onChange={handleInputChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      {status.type && (
        <p
          className={`
          mt-4 text-sm
          ${status.type === "error" ? "text-red-500" : "text-primary-font"}
        `}>
          {status.message}
        </p>
      )}
    </div>
  );
}
