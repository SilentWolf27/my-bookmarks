create table if not exists categories (
    id bigint primary key generated always as identity,
    name text not null,
    description text,
    user_id uuid references auth.users not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    deleted_at timestamp with time zone
);