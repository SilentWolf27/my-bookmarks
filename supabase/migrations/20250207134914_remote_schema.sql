drop policy "User can only delete their own bookmarks" on "public"."bookmarks";

drop policy "User can only insert bookmarks that belong to them" on "public"."bookmarks";

drop policy "User can only update their own bookmarks" on "public"."bookmarks";

drop policy "User can only view their own bookmarks" on "public"."bookmarks";

drop policy "User can only delete their own tags" on "public"."tags";

drop policy "User can only insert tags that belong to them" on "public"."tags";

drop policy "User can only view their own tags" on "public"."tags";

revoke delete on table "public"."bookmarks" from "anon";

revoke insert on table "public"."bookmarks" from "anon";

revoke references on table "public"."bookmarks" from "anon";

revoke select on table "public"."bookmarks" from "anon";

revoke trigger on table "public"."bookmarks" from "anon";

revoke truncate on table "public"."bookmarks" from "anon";

revoke update on table "public"."bookmarks" from "anon";

revoke delete on table "public"."bookmarks" from "authenticated";

revoke insert on table "public"."bookmarks" from "authenticated";

revoke references on table "public"."bookmarks" from "authenticated";

revoke select on table "public"."bookmarks" from "authenticated";

revoke trigger on table "public"."bookmarks" from "authenticated";

revoke truncate on table "public"."bookmarks" from "authenticated";

revoke update on table "public"."bookmarks" from "authenticated";

revoke delete on table "public"."bookmarks" from "service_role";

revoke insert on table "public"."bookmarks" from "service_role";

revoke references on table "public"."bookmarks" from "service_role";

revoke select on table "public"."bookmarks" from "service_role";

revoke trigger on table "public"."bookmarks" from "service_role";

revoke truncate on table "public"."bookmarks" from "service_role";

revoke update on table "public"."bookmarks" from "service_role";

revoke delete on table "public"."tags" from "anon";

revoke insert on table "public"."tags" from "anon";

revoke references on table "public"."tags" from "anon";

revoke select on table "public"."tags" from "anon";

revoke trigger on table "public"."tags" from "anon";

revoke truncate on table "public"."tags" from "anon";

revoke update on table "public"."tags" from "anon";

revoke delete on table "public"."tags" from "authenticated";

revoke insert on table "public"."tags" from "authenticated";

revoke references on table "public"."tags" from "authenticated";

revoke select on table "public"."tags" from "authenticated";

revoke trigger on table "public"."tags" from "authenticated";

revoke truncate on table "public"."tags" from "authenticated";

revoke update on table "public"."tags" from "authenticated";

revoke delete on table "public"."tags" from "service_role";

revoke insert on table "public"."tags" from "service_role";

revoke references on table "public"."tags" from "service_role";

revoke select on table "public"."tags" from "service_role";

revoke trigger on table "public"."tags" from "service_role";

revoke truncate on table "public"."tags" from "service_role";

revoke update on table "public"."tags" from "service_role";

alter table "public"."bookmarks" drop constraint "bookmarks_collection_id_fkey";

alter table "public"."bookmarks" drop constraint "bookmarks_user_id_fkey";

alter table "public"."tags" drop constraint "tags_bookmark_id_fkey";

alter table "public"."bookmarks" drop constraint "bookmarks_pkey";

alter table "public"."tags" drop constraint "tags_pkey";

drop index if exists "public"."bookmarks_collection_id";

drop index if exists "public"."bookmarks_favorite";

drop index if exists "public"."bookmarks_pkey";

drop index if exists "public"."bookmarks_title";

drop index if exists "public"."bookmarks_user_id";

drop index if exists "public"."tags_bookmark_id";

drop index if exists "public"."tags_name";

drop index if exists "public"."tags_pkey";

drop table "public"."bookmarks";

drop table "public"."tags";


