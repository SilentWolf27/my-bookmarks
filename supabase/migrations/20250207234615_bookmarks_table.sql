create table if not exists public.bookmarks (
  id bigint generated always as identity primary key,
  url text not null,
  title text not null,
  description text,
  user_id uuid default auth.uid() not null,
  collection_id bigint not null,
  is_favorite boolean default false not null,
  category text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  deleted_at timestamp with time zone,
  constraint bookmarks_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade,
  constraint bookmarks_collection_id_fkey foreign key (collection_id) references public.collections (id) on delete set null
) tablespace pg_default;

-- Indexes

create index if not exists bookmarks_user_id_index on public.bookmarks using btree (user_id);
create index if not exists bookmarks_collection_id_index on public.bookmarks using btree (collection_id);
create index if not exists bookmarks_deleted_at_index on public.bookmarks using btree (deleted_at);

-- Policies

create policy "Only the owner can insert into bookmarks" on public.bookmarks for insert with check (user_id = auth.uid());

create policy "Only the owner can update bookmarks" on public.bookmarks for update using (user_id = auth.uid());

create policy "Only the owner can delete bookmarks" on public.bookmarks for delete using (user_id = auth.uid());

create policy "Only the owner can select from bookmarks" on public.bookmarks for select using (user_id = auth.uid());

alter table public.bookmarks enable row level security;