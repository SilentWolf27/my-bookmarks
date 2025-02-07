interface Props {
  params: Promise<{ id: string }>;
}

export default async function CollectionPage({ params }: Props) {
  const { id } = await params;
  return (
    <div>
      <h1>Collection: {id}</h1>
    </div>
  );
}
