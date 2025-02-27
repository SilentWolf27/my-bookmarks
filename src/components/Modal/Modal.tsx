interface Props {
  children: React.ReactNode;
}

export default function Modal({ children }: Props) {
  return (
    <div className="min-w-sm bg-white py-3 px-6 rounded-sm max-h-full overflow-hidden">
      {children}
    </div>
  );
}
