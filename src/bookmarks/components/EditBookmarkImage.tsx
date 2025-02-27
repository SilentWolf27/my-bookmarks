"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import ModalHeader from "@/components/Modal/ModalHeader";
import ModalOverlay from "@/components/Modal/ModalOverlay";
import FileUploader from "@/components/form/FileUploader";
import { FileImageOutlined, LoadingOutlined } from "@ant-design/icons";

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
      <div className="w-full aspect-3/1 bg-gray-900/10 rounded-sx relative">
        {imageUrl && (
          <Image src={imageUrl} alt={title} width={100} height={100} />
        )}
        <button
          className="absolute top-3 right-3 text-xs bg-white px-3 py-1 rounded-md cursor-pointer transition-[scale] duration-300 hover:scale-105 border border-gray-300"
          onClick={openImageUploader}>
          Edita la imagen de portada
        </button>
      </div>

      {openModal && (
        <ModalOverlay>
          <Modal>
            <ModalHeader onClose={closeImageUploader} />
            <div className="p-4">
              <FileUploader accept="image/*" onFileSelected={handleFileChange}>
                <div className="flex flex-col items-center gap-2 text-gray-500">
                  <FileImageOutlined className="text-3xl" />
                  <p className="text-sm">
                    Arrastra una imagen o haz click para seleccionar
                  </p>
                </div>
              </FileUploader>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={closeImageUploader}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-all duration-300 cursor-pointer"
                  disabled={isUploading}>
                  Cancelar
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile || isUploading}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 disabled:bg-blue-200 disabled:cursor-not-allowed">
                  {isUploading ? <LoadingOutlined /> : "Subir imagen"}
                </button>
              </div>
            </div>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
