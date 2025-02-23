"use client";

import { useState } from "react";
import { Bookmark } from "../interfaces";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import ModalHeader from "@/components/Modal/ModalHeader";
import ModalOverlay from "@/components/Modal/ModalOverlay";
import FileUploader from "@/components/form/FileUploader";
interface Props {
  bookmark: Bookmark;
}

export default function BookMarkEditForm({ bookmark }: Props) {
  const [openModal, setOpenModal] = useState(false);

  const openImageUploader = () => setOpenModal(true);

  const closeImageUploader = () => setOpenModal(false);

  return (
    <>
      <article className="w-full h-full flex flex-col gap-3 text-primary-font">
        <div className="w-full aspect-3/1 bg-gray-900/10 rounded-sx relative">
          {bookmark.image && (
            <Image
              src={bookmark.image}
              alt={bookmark.title}
              width={100}
              height={100}
            />
          )}
          <button
            className="absolute top-3 right-3 text-xs bg-white px-3 py-1 rounded-md cursor-pointer transition-[scale] duration-300 hover:scale-105 border border-gray-300"
            onClick={openImageUploader}>
            Edita la imagen de portada
          </button>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{bookmark.title}</h2>
          <p>{bookmark.description}</p>
        </div>
      </article>
      {openModal && (
        <ModalOverlay>
          <Modal>
            <ModalHeader onClose={closeImageUploader} />
            <div>
              <FileUploader
                accept="image/*"
                onChange={(e) => {
                  console.log(e.target.files);
                }}
              />
            </div>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
