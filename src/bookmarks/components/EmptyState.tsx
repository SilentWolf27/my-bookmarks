interface Props {
  searchTerm: string;
}

export default function EmptyState({ searchTerm }: Props) {
  return (
    <section className="w-full mt-20 text-lg text-gray-600 text-center">
      {searchTerm ? (
        <p>No se encontraron resultados</p>
      ) : (
        <>
          <p>Tus marcadores aparecerán aquí</p>
          <p>
            Guarda tu primer marcador y accede fácilmente a tus enlaces
            favoritos
          </p>
        </>
      )}
    </section>
  );
} 