"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import ModalHeader from "@/components/Modal/ModalHeader";
import ModalOverlay from "@/components/Modal/ModalOverlay";
import FileUploader from "@/components/form/FileUploader";
import {
  FileImageOutlined,
  LoadingOutlined,
  CameraOutlined,
} from "@ant-design/icons";

interface Props {
  imageUrl?: string | null;
  title: string;
}

export default function EditBookmarkImage({ imageUrl, title }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const openImageUploader = () => setOpenModal(true);

  const closeImageUploader = () => {
    setOpenModal(false);
    setSelectedFile(null);
  };

  const handleFileChange = (file: File) => setSelectedFile(file);

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    try {
      // TODO: Implementar lógica de subida
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación
    } finally {
      setIsUploading(false);
      closeImageUploader();
    }
  };

  return (
    <>
      <div
        className={`
          relative w-full aspect-[21/9] rounded-lg overflow-hidden
          bg-gradient-to-br from-gray-900/5 to-gray-900/10
          transition-[background-color] duration-300 group
        `}>
        {imageUrl ? (
          <>
            <Image
              src={`bookmarks/${imageUrl}`}
              alt={title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <FileImageOutlined className="text-4xl text-gray-400" />
          </div>
        )}

        <button
          onClick={openImageUploader}
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg
            flex items-center gap-2 text-sm font-medium
            shadow-lg
            transition-[opacity,transform] duration-300
            opacity-0 group-hover:opacity-100 hover:scale-105
            border border-gray-200 cursor-pointer
          ">
          <CameraOutlined />
          {imageUrl ? "Cambiar imagen" : "Añadir imagen"}
        </button>
      </div>

      {openModal && (
        <ModalOverlay>
          <Modal>
            <ModalHeader onClose={closeImageUploader} />

            <div className="p-6">
              <FileUploader
                accept="image/*"
                onFileSelected={handleFileChange}>
                <div className="flex flex-col items-center gap-3 text-gray-500">
                  <FileImageOutlined className="text-4xl" />
                  <div className="text-center">
                    <p className="font-medium">Arrastra una imagen aquí</p>
                    <p className="text-sm text-gray-400">
                      o haz click para seleccionar
                    </p>
                  </div>
                  {selectedFile && (
                    <p className="text-sm text-blue-500 mt-2">
                      Archivo seleccionado: {selectedFile.name}
                    </p>
                  )}
                </div>
              </FileUploader>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={closeImageUploader}
                  className="
                    px-4 py-2 text-sm font-medium
                    text-gray-700 hover:text-gray-900
                    hover:bg-gray-100 rounded-lg
                    transition-[background-color,color] duration-300
                    cursor-pointer
                  "
                  disabled={isUploading}>
                  Cancelar
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile || isUploading}
                  className="
                    px-4 py-2 text-sm font-medium
                    bg-blue-600 text-white rounded-lg
                    hover:bg-blue-700 disabled:bg-blue-200
                    disabled:cursor-not-allowed
                    transition-colors duration-300
                    cursor-pointer
                    flex items-center gap-2
                  ">
                  {isUploading ? (
                    <>
                      <LoadingOutlined />
                      <span>Subiendo...</span>
                    </>
                  ) : (
                    "Subir imagen"
                  )}
                </button>
              </div>
            </div>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
