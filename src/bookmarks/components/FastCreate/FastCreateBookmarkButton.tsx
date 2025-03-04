"use client";

import { useState, useRef } from "react";
import {
  FolderAddOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { createBookmark } from "../../actions/create";
import { useClickOutside } from "@/hooks/useClickOutside";
import { createCollection } from "@/collections/actions/create";
import { Props, FormState } from "./types";
import CreateButtonGroup from "./FastCreateButton";
import FastCreateForm from "./FastCreateForm";

export default function FastCreateFormContainer({
  collection,
  onSuccess,
}: Props) {
  const [formState, setFormState] = useState<FormState>({
    isFormOpen: false,
    isLoading: false,
    action: "bookmark",
  });
  const formRef = useRef<HTMLFormElement>(null);

  useClickOutside({
    ref: formRef,
    handler: () => setFormState((prev) => ({ ...prev, isFormOpen: false })),
    events: ["mousedown"],
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const input = formData.get("input") as string;

    if (!input.trim()) {
      setFormState((prev) => ({ ...prev, isFormOpen: false }));
      return;
    }

    setFormState((prev) => ({ ...prev, isLoading: true }));
    try {
      if (formState.action === "bookmark") {
        await createBookmark({ url: input, collectionId: collection.id });
      } else {
        await createCollection({ name: input, parentId: collection.id });
      }
      onSuccess?.();
      setFormState((prev) => ({ ...prev, isFormOpen: false }));
    } catch {
      // Error handling will be implemented later
    } finally {
      setFormState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const selectCollectionAction = () => {
    setFormState((prev) => ({ 
      ...prev, 
      action: "collection", 
      isFormOpen: true,
    }));
  };

  const selectBookmarkAction = () => {
    setFormState((prev) => ({ 
      ...prev, 
      action: "bookmark", 
      isFormOpen: true,
    }));
  };

  const getFormProps = () => {
    if (formState.action === "bookmark") {
      return {
        title: "Nuevo marcador",
        icon: <LinkOutlined className="text-blue-600" />,
        placeholder: "https://ejemplo.com",
      };
    }
    return {
      title: "Nueva colección",
      icon: <FolderAddOutlined className="text-blue-600" />,
      placeholder: "Nombre de la colección",
    };
  };

  return (
    <div className="relative">
      <CreateButtonGroup
        formState={formState}
        onBookmarkClick={selectBookmarkAction}
        onCollectionClick={selectCollectionAction}
        canCreateCollection={collection.parentId === null}
      />

      <FastCreateForm
        isOpen={formState.isFormOpen}
        onSubmit={handleSubmit}
        formRef={formRef}
        {...getFormProps()}
      />
    </div>
  );
}
