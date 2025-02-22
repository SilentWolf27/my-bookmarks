interface Props {
  children: React.ReactNode;
}

export default function ModalOverlay({ children }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 z-10 flex items-center justify-center">
      {children}
    </div>
  );
}
