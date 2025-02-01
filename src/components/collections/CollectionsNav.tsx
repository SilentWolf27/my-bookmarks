import { Collection } from "@/interfaces/Collections";

interface Props {
  collections: Collection[];
}

export default async function CollectionsNav({ collections }: Props) {
  return <div className="h-full max-h-full overflow-y-auto"></div>;
}
