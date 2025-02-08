import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { FormEventHandler, forwardRef, KeyboardEventHandler } from "react";

import { useState } from "react";
import { createCollection } from "../actions/create";

interface Props {
  onClose: () => void;
}

export const NewCollectionInput = forwardRef<HTMLInputElement, Props>(
  ({ onClose }, ref) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const newCollectionName = formData.get("newCollection") as string;

      if (!newCollectionName) return onClose();

      setIsLoading(true);
      await createCollection({ name: newCollectionName });
      onClose();
    };

    const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
      if (event.key == "Escape") onClose();
    };

    return (
      <form
        className="flex items-center justify-between font-medium text-primary-font hover:bg-gray-200 transition-[background-color] duration-250 text-sm overflow-hidden text-nowrap text-ellipsis whitespace-nowrap group bg-gray-200 relative"
        onSubmit={handleSubmit}>
        {isLoading ? (
          <LoadingOutlined className="text-xs absolute left-4" />
        ) : (
          <PlusOutlined className="text-xs absolute left-4" />
        )}
        <input
          ref={ref}
          type="text"
          name="newCollection"
          className="w-full h- full  px-10 py-1 flex items-center gap-2 bg-transparent"
          placeholder="Nueva colección"
          onKeyUp={handleKeyUp}
        />
      </form>
    );
  }
);
