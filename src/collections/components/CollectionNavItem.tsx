import Link from "next/link";
import { Collection } from "../interfaces/Collections";

interface Props {
  collection: Collection;
}

export default function CollectionNavItem({ collection }: Props) {
  return (
    <li className="flex items-center justify-between font-medium text-primary-font hover:bg-gray-200 rounded-md transition-[background-color] duration-250 text-base">
      <Link
        href={`/collections/${collection.id}`}
        className="w-full h- full  px-4 py-2">
        {collection.name}
      </Link>
    </li>
  );
}
