create table if not exists collections (
    id bigint primary key generated always as identity,
    name text not null,
    description text,
    user_id uuid references auth.users not null,
    is_archived boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    deleted_at timestamp with time zone
);