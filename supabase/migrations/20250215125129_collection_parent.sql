alter table collections add column parent_id bigint default null;

alter table collections add constraint fk_parent_id foreign key (parent_id) references collections(id) on delete set null;