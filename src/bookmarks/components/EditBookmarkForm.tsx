"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editBookmarkSchema, EditBookmarkFormValues } from "../schemas";
import { LoadingOutlined } from "@ant-design/icons";
import { updateBookmark } from "../actions/updateBookmark";
import { deleteBookmark } from "../actions/delete";
import { Bookmark } from "../interfaces";

interface Props {
  bookmark: Bookmark;
}

export default function EditBookmarkForm({ bookmark }: Props) {
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
    const result = await updateBookmark(bookmark.id, data, bookmark.collection_id);
    if (result.error) setError("root", { message: result.error.message });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <input
          {...register("title")}
          className="w-full text-xl font-semibold p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Título"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </div>

      <div>
        <textarea
          {...register("description")}
          className="text-sm w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 field-sizing-content min-h-16 resize-none"
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

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={async () => {
            if (confirm('¿Estás seguro de que quieres eliminar este marcador?')) {
              const result = await deleteBookmark(bookmark.id);
              if (result.error) setError("root", { message: result.error.message });
            }
          }}
          className="text-base px-5 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
        >
          Eliminar
        </button>
        <button
          type="submit"
          className="text-base px-5 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-200 cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? <LoadingOutlined /> : "Guardar"}
        </button>
      </div>
      {errors.root && (
        <span className="text-red-500 text-sm">{errors.root.message}</span>
      )}
    </form>
  );
} 