export interface Bookmark {
    id: string;
    title: string;
    url: string;
    description: string | null;
    collection_id: string | null;
    image: string | null;
}
