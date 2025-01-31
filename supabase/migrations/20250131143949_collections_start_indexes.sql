create unique index "collections_user_id" on public.collections using  btree (user_id);

create index "collections_name" on public.collections using  btree (name);