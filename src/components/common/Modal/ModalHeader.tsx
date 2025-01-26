"use client";

import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface Props {
  children?: React.ReactNode;
}

export default function ModalHeader({ children }: Props) {
  const router = useRouter();

  const closeModal = () => router.back();

  return (
    <div
      className={`flex items-center h-auto ${
        children ? "justify-between" : "justify-end"
      }`}>
      {children}

      <button type="button" onClick={closeModal}>
        <CloseOutlined />
      </button>
    </div>
  );
}
