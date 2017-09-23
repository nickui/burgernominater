CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers 
(
    id INT NOT NULL auto_increment,
    burger_name VARCHAR (30) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

