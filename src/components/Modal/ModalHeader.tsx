import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface Props {
  children?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export default function ModalHeader({ children, onClose, className }: Props) {
  return (
    <div
      className={`flex items-center h-auto ${
        children ? "justify-between" : "justify-end"
      } ${className}`}>
      {children}
      <button
        className="cursor-pointer hover:scale-105 transition-[scale] duration-200"
        type="button"
        onClick={onClose}>
        <CloseOutlined />
      </button>
    </div>
  );
}
