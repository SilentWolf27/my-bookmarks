"use client";

import { ChangeEventHandler, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

interface Props {
  children: React.ReactNode;
  accept?: string;
  onFileSelected: (file: File) => void;
  className?: string;
  maxSize?: number;
}

type FileStatus = {
  type: "error" | "success" | "empty";
  message: string;
};

export default function FileUploader({
  children,
  accept,
  onFileSelected,
  className = "",
  maxSize = 5,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setError(null);
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && e.currentTarget.contains(relatedTarget)) return;
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    setError(null);

    const file = event.dataTransfer.files?.[0];
    handleFile(file);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setError(null);
    const file = event.target.files?.[0];
    handleFile(file);
  };

  const handleFile = (file: File | undefined) => {
    try {
      if (!file) throw new Error("No se ha seleccionado ningún archivo");
      validateFile(file);
      onFileSelected(file);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error al procesar el archivo");
    }
  };

  const validateFile = (file: File) => {
    const acceptedTypes = accept?.split(",").map((type) => type.trim()) || [];

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
          transition-[border-color,background-color] duration-200
          ${isDragging ? "border-blue-400 bg-blue-50" : "border-gray-300"}
          ${error ? "border-red-400 bg-red-50" : ""}
        `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        <label className={`block cursor-pointer ${className}`}>
          <input
            type="file"
            className="hidden"
            accept={accept}
            onChange={handleChange}
          />
          {children}
        </label>
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-50/80 backdrop-blur-[1px] animate-fade-in">
            <div className="flex items-center gap-2 text-red-500">
              <ExclamationCircleOutlined className="text-lg" />
              <span className="text-sm font-medium">{error}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
