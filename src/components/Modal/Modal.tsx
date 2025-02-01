interface Props {
  children: React.ReactNode;
}

export default function Modal({ children }: Props) {
  return (
    <div className="absolute z-10 inset-0 bg-black/40 flex items-center justify-center">
      {children}
    </div>
  );
}
