-- Create a new bucket for bookmark-related files
insert into storage.buckets (id, name, public)
values ('bookmarks', 'bookmarks', false);

-- Create policies for bookmark files
create policy "Authenticated users can upload bookmark files"
  on storage.objects for insert
  with check (
    bucket_id = 'bookmarks' 
    and auth.role() = 'authenticated'
  );

create policy "Authenticated users can update their own bookmark files"
  on storage.objects for update
  using (
    bucket_id = 'bookmarks' 
    and auth.uid() = owner
  );

create policy "Authenticated users can read bookmark files"
  on storage.objects for select
  using (
    bucket_id = 'bookmarks' 
    and auth.role() = 'authenticated'
  );

create policy "Users can delete their own bookmark files"
  on storage.objects for delete
  using (
    bucket_id = 'bookmarks' 
    and auth.uid() = owner
  );
