create policy "User can only insert collections that belong to them"
on collections for insert
to authenticated
with check (
    ((select auth.uid()) = user_id)
);

create policy "User can only view their own collections"
on collections for select
to authenticated
using (
    (select auth.uid()) = user_id
);

create policy "User can only update their own collections"
on collections for update
to authenticated
using (
    (select auth.uid()) = user_id
);

create policy "User can only delete their own collections"
on collections for delete
to authenticated
using (
    (select auth.uid()) = user_id
);

