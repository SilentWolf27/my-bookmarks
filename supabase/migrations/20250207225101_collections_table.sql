create table if not exists public.collections (
  id bigint generated always as identity primary key,
  name text not null,
  description text,
  user_id uuid default auth.uid() not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  deleted_at timestamp with time zone,
  constraint collections_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade
) tablespace pg_default;

-- Indexes

create index if not exists collections_user_id_index on public.collections using btree (user_id);
create index if not exists collections_deleted_at_index on public.collections using btree (deleted_at);
create unique index if not exists collections_name_index on public.collections using btree (name);

-- Policies

create policy "Only the owner can insert into collections" on public.collections for insert with check (user_id = auth.uid());
create policy "Only the owner can update collections" on public.collections for update using (user_id = auth.uid());
create policy "Only the owner can delete collections" on public.collections for delete using (user_id = auth.uid());
create policy "Only the owner can select from collections" on public.collections for select using (user_id = auth.uid());

