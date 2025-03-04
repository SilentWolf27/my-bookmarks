import { Collection } from "@/collections/interfaces/Collections";

export type Action = "bookmark" | "collection";

export interface FormState {
  isFormOpen: boolean;
  isLoading: boolean;
  action: Action;
}

export interface Props {
  collection: Collection;
  onSuccess?: () => void;
} 