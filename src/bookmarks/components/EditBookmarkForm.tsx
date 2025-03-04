"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editBookmarkSchema, EditBookmarkFormValues } from "../schemas";
import { LoadingOutlined, SaveOutlined, DeleteOutlined } from "@ant-design/icons";
import { updateBookmark } from "../actions/updateBookmark";
import { deleteBookmark } from "../actions/delete";
import { Bookmark } from "../interfaces";
import { useState } from "react";
import ConfirmationModal from "@/components/Modal/ConfirmationModal";

interface Props {
  bookmark: Bookmark;
}

export default function EditBookmarkForm({ bookmark }: Props) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<EditBookmarkFormValues>({
    resolver: zodResolver(editBookmarkSchema),
    defaultValues: {
      title: bookmark.title,
      description: bookmark.description || "",
      url: bookmark.url,
    },
  });

  const onSubmit = async (data: EditBookmarkFormValues) => {
    const result = await updateBookmark(
      bookmark.id,
      data,
      bookmark.collection_id
    );
    if (result.error) setError("root", { message: result.error.message });
  };

  const handleDelete = async () => {
    setIsDeleteModalOpen(false);
    const result = await deleteBookmark(bookmark.id, bookmark.collection_id);
    if (result.error) setError("root", { message: result.error.message });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title Field */}
        <div className="relative">
          <input
            {...register("title")}
            className="
              peer w-full text-lg font-medium px-2 py-1.5
              border-0 border-b-2 border-gray-200
              focus:border-blue-500 focus:ring-0
              transition-[color, border-color] duration-200 outline-0
              placeholder-transparent
            "
            placeholder="Título"
            id="title"
          />
          <label
            htmlFor="title"
            className="
              absolute left-2 -top-4 text-xs text-primary-font
              transition-[top, left, font-size, color] duration-200
              peer-placeholder-shown:text-sm
              peer-placeholder-shown:text-gray-400
              peer-placeholder-shown:top-1.5
              peer-focus:-top-4
              peer-focus:text-xs
              peer-focus:text-blue-500
            "
          >
            Título
          </label>
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* Description Field */}
        <div className="relative">
          <textarea
            {...register("description")}
            className="
              peer w-full px-2 py-1.5 text-sm
              border-0 border-b-2 border-gray-200
              focus:border-blue-500 focus:ring-0
              transition-[color, border-color] duration-200
              placeholder-transparent outline-0
              resize-none min-h-[80px]
            "
            placeholder="Descripción"
            id="description"
          />
          <label
            htmlFor="description"
            className="
              absolute left-2 -top-4 text-xs text-primary-font
              transition-[top, left, font-size, color] duration-200
              peer-placeholder-shown:text-sm
              peer-placeholder-shown:text-gray-500
              peer-placeholder-shown:top-1.5
              peer-focus:-top-4
              peer-focus:text-xs
              peer-focus:text-blue-500
            "
          >
            Descripción
          </label>
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* URL Field */}
        <div className="relative">
          <input
            {...register("url")}
            type="url"
            className="
              peer w-full px-2 py-1.5 text-sm
              border-0 border-b-2 border-gray-200
              focus:border-blue-500 focus:ring-0
              transition-[color, border-color] duration-200
              placeholder-transparent outline-0
            "
            placeholder="URL"
            id="url"
          />
          <label
            htmlFor="url"
            className="
              absolute left-2 -top-4 text-xs text-primary-font
              transition-[top, left, font-size, color] duration-200
              peer-placeholder-shown:text-sm
              peer-placeholder-shown:text-gray-400
              peer-placeholder-shown:top-1.5
              peer-focus:-top-4
              peer-focus:text-xs
              peer-focus:text-blue-500
            "
          >
            URL
          </label>
          {errors.url && (
            <p className="mt-1 text-sm text-red-500">{errors.url.message}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={() => setIsDeleteModalOpen(true)}
            className="
              inline-flex items-center gap-2 px-4 py-2
              text-sm font-medium text-red-600
              hover:text-red-700 hover:bg-red-50
              rounded-lg transition-colors duration-200
            "
          >
            <DeleteOutlined />
            Eliminar
          </button>
          <button
            type="submit"
            disabled={isSubmitting || !isDirty}
            className="
              inline-flex items-center gap-2 px-4 py-2
              text-sm font-medium text-white
              bg-blue-600 hover:bg-blue-700
              disabled:bg-blue-200 disabled:cursor-not-allowed
              rounded-lg transition-colors duration-200
            "
          >
            {isSubmitting ? (
              <>
                <LoadingOutlined />
                Guardando...
              </>
            ) : (
              <>
                <SaveOutlined />
                Guardar
              </>
            )}
          </button>
        </div>

        {errors.root && (
          <p className="mt-4 text-sm text-red-500 text-center">
            {errors.root.message}
          </p>
        )}
      </form>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Eliminar marcador"
        message="¿Estás seguro de que quieres eliminar este marcador? Esta acción no se puede deshacer."
        confirmText="Eliminar"
        cancelText="Cancelar"
      />
    </>
  );
}
