import { ChangeEventHandler, useState } from "react";

interface Props {
  accept: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
  maxSize?: number;
}

export default function FileUploader({
  accept,
  onChange,
  children,
  maxSize = 5,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = () => setIsDragging(true);

  const handleDragLeave = () => setIsDragging(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];

    validateFile(file);
  };

  const validateFile = (file: File) => {
    if (!file) throw new Error("No se ha seleccionado ningún archivo");

    if (file.size > 1024 * 1024 * maxSize)
      throw new Error(`El archivo no puede ser mayor a ${maxSize}MB`);
  };

  return (
    <div className="">
      <div
        className={`w-full min-h-20 border-dashed border-2  rounded-md flex items-center justify-center ${
          isDragging ? "border-blue-400" : "border-gray-300"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        {children}
      </div>
    </div>
  );
}
