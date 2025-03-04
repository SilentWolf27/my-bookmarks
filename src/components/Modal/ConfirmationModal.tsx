"use client";

import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import ModalOverlay from "./ModalOverlay";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}: Props) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader onClose={onClose}>
          <p className="text-lg font-semibold">{title}</p>
        </ModalHeader>
        <div className="p-4">
          <p className="text-gray-600 mb-6">{message}</p>
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-all duration-300 cursor-pointer">
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 text-sm bg-red-600 text-white rounded cursor-pointer hover:bg-red-700">
              {confirmText}
            </button>
          </div>
        </div>
      </Modal>
    </ModalOverlay>
  );
}
