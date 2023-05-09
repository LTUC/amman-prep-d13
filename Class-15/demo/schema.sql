create table if not exists fav_recipe (
  id serial primary key,
  title varchar(255),
  ready_in_minutes integer,
  summary varchar(100000),
  image varchar(255)
);

insert into fav_recipe(title, ready_in_minutes, summary, image) values('test', 45, 'anything', 'http://google.com')