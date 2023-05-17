create table if not exists fav_recipe (
  id serial primary key,
  title varchar(255),
  ready_in_minutes integer,
  summary varchar(100000),
  image varchar(255)
);

create table if not exists product (
  id serial primary key,
  product_id integer,
  title varchar(255),
  description varchar(1000),
  brand varchar(255),
  thumbnail varchar(1000),
  stock integer,
  price decimal(5, 2),
  rating decimal(2, 1)
);

insert into fav_recipe(title, ready_in_minutes, summary, image) values('test', 45, 'anything', 'http://google.com')