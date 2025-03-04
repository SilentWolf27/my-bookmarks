"use client";

import {
  CaretDownOutlined,
  LoadingOutlined,
  PlusOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import { FormState } from "./types";
import Dropdown from "@/components/Dropdown/Dropdown";
import DropdownItem from "@/components/Dropdown/DropdownItem";

interface Props {
  formState: FormState;
  onBookmarkClick: () => void;
  onCollectionClick: () => void;
  canCreateCollection: boolean;
}

const buttonBaseStyles = "bg-blue-600 text-white flex items-center gap-2 px-2 py-1 cursor-pointer min-h-7 hover:bg-blue-700 transition-colors";

export default function CreateButtonGroup({
  formState,
  onBookmarkClick,
  onCollectionClick,
  canCreateCollection,
}: Props) {
  return (
    <div className="flex gap-1">
      <button
        id="fast-create-bookmark-button"
        className={`${buttonBaseStyles} text-sm rounded-l-md`}
        onClick={onBookmarkClick}
        aria-label="Agregar marcador rápido">
        {formState.isLoading ? <LoadingOutlined /> : <PlusOutlined />}
        Nuevo
      </button>

      <Dropdown
        trigger={
          <button
            className={`${buttonBaseStyles} text-xs rounded-r-md`}
            aria-haspopup="true"
            role="button">
            <CaretDownOutlined />
          </button>
        }
        placement="bottom-right">
        {canCreateCollection && (
          <DropdownItem onClick={onCollectionClick}>
            <FolderAddOutlined className="mr-2" />
            Agregar colección
          </DropdownItem>
        )}
      </Dropdown>
    </div>
  );
}
