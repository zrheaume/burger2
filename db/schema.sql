DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    description VARCHAR(255),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    burger_name varchar(40),
    meat varchar(12) not NULL,
    bun varchar(18) not null,
    lettuce bool not null,
    toms bool not null,
    onions bool not null,
    pickles bool not null,
    bacon bool not null,
    ketchup bool not null,
    mustard bool not null,
    mayo bool not null,
    bbq bool not null,
    devoured bool not null,
    PRIMARY KEY(id)
);
