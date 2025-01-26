import Modal from "@/components/common/Modal/Modal";
import ModalHeader from "@/components/common/Modal/ModalHeader";

export default function NewItemPage() {
  return (
    <Modal>
      <div className="w-full max-w-md bg-white rounded-md py-6 px-4">
        <ModalHeader />
      </div>
    </Modal>
  );
}
