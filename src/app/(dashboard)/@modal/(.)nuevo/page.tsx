"use client";

import Modal from "@/components/Modal/Modal";
import ModalHeader from "@/components/Modal/ModalHeader";
import CollectionForm from "@/collections/components/CollectionForm";
import SelectItemType from "@/items/components/ItemType";
import { ItemType } from "@/items/interfaces/Item";
import {
  ArrowLeftOutlined,
  FolderOpenOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BookmarksForm from "@/bookmarks/components/BookmarksForm";

export default function NewItemPage() {
  const router = useRouter();
  const [itemType, setItemType] = useState<ItemType | null>(null);

  const closeModal = () => router.back();

  const selectItemType = (type: ItemType | null) => {
    setItemType(type);
  };

  return (
    <Modal>
      <div className="w-full max-w-md bg-white rounded-md py-6 px-4">
        <ModalHeader className="mb-3" onClose={closeModal}>
          {itemType !== null && (
            <button onClick={() => selectItemType(null)} className="text-base">
              <ArrowLeftOutlined />
            </button>
          )}
        </ModalHeader>
        {itemType === null && (
          <div className="flex justify-start items-baseline gap-6 text-primary-font uppercase text-sm flex-wrap">
            <SelectItemType onClick={() => selectItemType(ItemType.Collection)}>
              <FolderOpenOutlined className="text-4xl" />
              <p>Colección</p>
            </SelectItemType>
            <SelectItemType onClick={() => selectItemType(ItemType.Bookmark)}>
              <PushpinOutlined className="text-4xl" />
              <p>Marcador</p>
            </SelectItemType>
          </div>
        )}

        {itemType === ItemType.Collection && (
          <CollectionForm onClose={closeModal} />
        )}

        {itemType === ItemType.Bookmark && (
          <BookmarksForm onClose={closeModal} />
        )}
      </div>
    </Modal>
  );
}
