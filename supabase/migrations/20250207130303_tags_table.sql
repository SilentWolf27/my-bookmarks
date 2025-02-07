create table if not exists tags (
    id bigint primary key generated always as identity,
    name text not null,
    bookmark_id bigint references bookmarks(id),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    deleted_at timestamp with time zone
);

create index "tags_name" on public.tags using  btree (name);
create index "tags_bookmark_id" on public.tags using  btree (bookmark_id);

alter table "tags" enable row level security;

-- # policies

create policy "User can only insert tags that belong to them"
on tags for insert
to authenticated
with check (
    exists (select 1 from bookmarks where id = bookmark_id and user_id = (select auth.uid()))
);

create policy "User can only view their own tags"
on tags for select
to authenticated
using (exists (
    select 1 from bookmarks where id = bookmark_id and user_id = (select auth.uid())
));

create policy "User can only delete their own tags"
on tags for delete
to authenticated
using (exists (
    select 1 from bookmarks where id = bookmark_id and user_id = (select auth.uid())
));
