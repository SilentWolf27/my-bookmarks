create table if not exists public.tags (
  id bigint generated always as identity primary key,
  name text not null,
  bookmark_id bigint not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  deleted_at timestamp with time zone,
    constraint tags_bookmark_id_fkey foreign key (bookmark_id) references public.bookmarks (id) on delete cascade
) tablespace pg_default;

-- Indexes

create index if not exists tags_bookmark_id_index on public.tags using btree (bookmark_id);
create index if not exists tags_deleted_at_index on public.tags using btree (deleted_at);

-- Policies

alter table public.tags enable row level security;