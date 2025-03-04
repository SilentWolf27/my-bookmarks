"use client";

import { useState, useRef } from "react";
import { FolderAddOutlined, LinkOutlined } from "@ant-design/icons";
import { createBookmark } from "../../actions/create";
import { useClickOutside } from "@/hooks/useClickOutside";
import { createCollection } from "@/collections/actions/create";
import { Props, FormState } from "./types";
import CreateButtonGroup from "./FastCreateButton";
import FastCreateForm from "./FastCreateForm";

const FORM_PROPS = {
  bookmark: {
    title: "Nuevo marcador",
    icon: <LinkOutlined className="text-blue-600" />,
    placeholder: "https://ejemplo.com",
  },
  collection: {
    title: "Nueva colección",
    icon: <FolderAddOutlined className="text-blue-600" />,
    placeholder: "Nombre de la colección",
  },
} as const;

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

  const handleActionSelect = (action: FormState["action"]) => {
    setFormState((prev) => ({
      ...prev,
      action,
      isFormOpen: true,
    }));
  };

  return (
    <div className="relative">
      <CreateButtonGroup
        formState={formState}
        onBookmarkClick={() => handleActionSelect("bookmark")}
        onCollectionClick={() => handleActionSelect("collection")}
        canCreateCollection={collection.parentId === null}
      />

      <FastCreateForm
        isOpen={formState.isFormOpen}
        onSubmit={handleSubmit}
        formRef={formRef}
        {...FORM_PROPS[formState.action]}
      />
    </div>
  );
}
