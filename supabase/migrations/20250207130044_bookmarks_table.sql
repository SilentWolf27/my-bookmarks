create table if not exists bookmarks (
    id bigint primary key generated always as identity,
    url text not null,
    title text not null,
    image_url text,
    note text,
    user_id uuid references auth.users default auth.uid(),
    collection_id bigint references collections(id),
    is_archived boolean default false,
    is_favorite boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    deleted_at timestamp with time zone
);

create index "bookmarks_title" on public.bookmarks using  btree (title);
create index "bookmarks_favorite" on public.bookmarks using  btree (is_favorite);
create index "bookmarks_collection_id" on public.bookmarks using  btree (collection_id);
create index "bookmarks_user_id" on public.bookmarks using  btree (user_id);

alter table "bookmarks" enable row level security;

-- # policies

create policy "User can only insert bookmarks that belong to them"
on bookmarks for insert
to authenticated
with check (
    ((select auth.uid()) = user_id)
);

create policy "User can only view their own bookmarks"
on bookmarks for select
to authenticated
using (
    (select auth.uid()) = user_id
);

create policy "User can only update their own bookmarks"
on bookmarks for update
to authenticated
using (
    (select auth.uid()) = user_id
)
with check (
    (user_id = (select auth.uid()))
);

create policy "User can only delete their own bookmarks"
on bookmarks for delete
to authenticated
using (
    (select auth.uid()) = user_id
);
