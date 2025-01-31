alter table if exists collections
    alter column user_id set default auth.uid();