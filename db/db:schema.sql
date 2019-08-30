-- ### `Schema`.

-- CREATE DATABASE burger_db;
-- USE burger_db;

-- CREATE TABLE burgers
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(255) NOT NULL,
-- 	Eatme BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id int PRIMARY KEY AUTO_INCREMENT,
  burger_name varchar(100) NOT NULL,
  devoured boolean NOT NULL DEFAULT 0,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);