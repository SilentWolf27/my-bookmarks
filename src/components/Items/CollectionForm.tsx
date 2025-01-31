import {
  CollectionFormValues,
  createCollectionSchema,
} from "@/schemas/collections/create";
import { LoadingOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { FocusEventHandler } from "react";
import { useForm } from "react-hook-form";

export default function CollectionForm() {
  const {
    handleSubmit,
    register,
    trigger,
    setError,
    formState: { errors: formErrors, isSubmitting },
  } = useForm<CollectionFormValues>({
    resolver: zodResolver(createCollectionSchema),
  });

  const onSubmit = async (data: CollectionFormValues) => {
    console.log(data);
  };

  const onBlur: FocusEventHandler<HTMLInputElement> = async ({ target }) => {
    const name = target.name as keyof CollectionFormValues;
    await trigger(name);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="name">Nombre</label>
        {formErrors.name && (
          <span className="text-red-600 text-sm">
            {formErrors.name.message}
          </span>
        )}
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Nombre"
          className={`w-full border border-zinc-300 rounded-md py-1 px-3 min-h-[32px] ${
            formErrors.name ? "border-red-600" : ""
          }`}
          onBlur={onBlur}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="description">Descripción</label>
        <textarea
          {...register("description")}
          placeholder="Descripción"
          className={`w-full border border-zinc-300 rounded-md py-1 px-3 resize-none min-h-[60px] field-sizing-content`}></textarea>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 disabled:bg-blue-500/60 min-w-[100px] transition-width duration-200"
          disabled={isSubmitting}>
          {isSubmitting ? <LoadingOutlined /> : "Guardar"}
        </button>
      </div>
    </form>
  );
}
