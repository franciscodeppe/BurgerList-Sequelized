CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
        id INTEGER AUTO_INCREMENT NOT NULL,
        burger_name VARCHAR(255) NOT NULL,
        devoured BOOLEAN NOT NULL DEFAULT false,
        date TIMESTAMP,
        PRIMARY KEY(id)
);

Select * from burgers;
