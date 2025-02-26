"use client";

import { useState } from "react";
import { Bookmark } from "../interfaces";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import ModalHeader from "@/components/Modal/ModalHeader";
import ModalOverlay from "@/components/Modal/ModalOverlay";
import FileUploader from "@/components/form/FileUploader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editBookmarkSchema } from "../schemas";
import { EditBookmarkFormValues } from "../schemas";
import { LoadingOutlined } from "@ant-design/icons";
import { updateBookmark } from "../actions/updateBookmark";

interface Props {
  bookmark: Bookmark;
}

export default function BookMarkEditForm({ bookmark }: Props) {
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<EditBookmarkFormValues>({
    resolver: zodResolver(editBookmarkSchema),
    defaultValues: {
      title: bookmark.title,
      description: bookmark.description || "",
      url: bookmark.url,
    },
  });

  const onSubmit = async (data: EditBookmarkFormValues) => {
    const result = await updateBookmark(bookmark.id, data);

    if (result.error) setError("root", { message: result.error.message });
  };

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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              {...register("title")}
              className="w-full text-xl font-semibold p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Título"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          <div>
            <textarea
              {...register("description")}
              className=" text-sm w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 field-sizing-content min-h-16 resize-none"
              placeholder="Descripción"
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          <div>
            <input
              {...register("url")}
              className="text-sm w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="URL"
            />
            {errors.url && (
              <span className="text-red-500 text-sm">{errors.url.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="text-base self-end px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-200"
            disabled={isSubmitting}>
            {isSubmitting ? <LoadingOutlined /> : "Guardar"}
          </button>
          {errors.root && (
            <span className="text-red-500 text-sm">{errors.root.message}</span>
          )}
        </form>
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
