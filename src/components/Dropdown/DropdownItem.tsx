interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function DropdownItem({ children, onClick, className }: Props) {
  return (
    <div
      role="menuitem"
      className={`px-4 py-2 text-sm text-primary-font hover:bg-gray-100 cursor-pointer ${className}`}
      onClick={onClick}>
      {children}
    </div>
  );
}
