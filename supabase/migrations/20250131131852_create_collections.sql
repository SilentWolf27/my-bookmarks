create table if not exists collections (
    id bigint primary key generated always as identity,
    name text not null,
    description text,
    user_id uuid references auth.users default auth.uid(),
    is_archived boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    deleted_at timestamp with time zone
);

create index "collections_name" on public.collections using  btree (name);

alter table "collections" enable row level security;