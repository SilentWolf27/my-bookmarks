import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface Props {
  children?: React.ReactNode;
  onClose?: () => void;
}

export default function ModalHeader({ children, onClose }: Props) {
  return (
    <div
      className={`flex items-center h-auto ${
        children ? "justify-between" : "justify-end"
      }`}>
      {children}
      <button type="button" onClick={onClose}>
        <CloseOutlined />
      </button>
    </div>
  );
}
