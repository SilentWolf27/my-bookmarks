-- Make the bookmarks bucket public
update storage.buckets
set public = true
where id = 'bookmarks';

-- Update the read policy to allow public access
drop policy if exists "Authenticated users can read bookmark files" on storage.objects;

create policy "Anyone can read bookmark files"
  on storage.objects for select
  using (bucket_id = 'bookmarks');
