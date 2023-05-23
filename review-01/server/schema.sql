drop table team;
create table if not exists team (
  id serial primary key,
  first_name varchar(255),
  last_name varchar(255),
  avatar varchar(1000),
  expertise varchar(255),
  fb varchar(255),
  tw varchar(255),
  created_at timestamp default CURRENT_TIMESTAMP
)