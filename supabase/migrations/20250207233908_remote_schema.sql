drop policy "Only the owner can delete collections" on "public"."collections";

drop policy "Only the owner can insert into collections" on "public"."collections";

drop policy "Only the owner can select from collections" on "public"."collections";

drop policy "Only the owner can update collections" on "public"."collections";

revoke delete on table "public"."collections" from "anon";

revoke insert on table "public"."collections" from "anon";

revoke references on table "public"."collections" from "anon";

revoke select on table "public"."collections" from "anon";

revoke trigger on table "public"."collections" from "anon";

revoke truncate on table "public"."collections" from "anon";

revoke update on table "public"."collections" from "anon";

revoke delete on table "public"."collections" from "authenticated";

revoke insert on table "public"."collections" from "authenticated";

revoke references on table "public"."collections" from "authenticated";

revoke select on table "public"."collections" from "authenticated";

revoke trigger on table "public"."collections" from "authenticated";

revoke truncate on table "public"."collections" from "authenticated";

revoke update on table "public"."collections" from "authenticated";

revoke delete on table "public"."collections" from "service_role";

revoke insert on table "public"."collections" from "service_role";

revoke references on table "public"."collections" from "service_role";

revoke select on table "public"."collections" from "service_role";

revoke trigger on table "public"."collections" from "service_role";

revoke truncate on table "public"."collections" from "service_role";

revoke update on table "public"."collections" from "service_role";

alter table "public"."collections" drop constraint "collections_user_id_fkey";

alter table "public"."collections" drop constraint "collections_pkey";

drop index if exists "public"."collections_deleted_at_index";

drop index if exists "public"."collections_name_index";

drop index if exists "public"."collections_pkey";

drop index if exists "public"."collections_user_id_index";

drop table "public"."collections";


