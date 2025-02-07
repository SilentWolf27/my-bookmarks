drop index if exists "public"."collections_user_id";

alter table "public"."collections" alter column "user_id" set not null;


