interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function ItemType({ children, onClick }: Props) {
  return (
    <button
      className="capitalize cursor-pointer flex flex-col items-center justify-center gap-2 py-3 px-5 border border-transparent rounded-md hover:border-blue-500 hover:bg-blue-100"
      onClick={onClick}>
      {children}
    </button>
  );
}
