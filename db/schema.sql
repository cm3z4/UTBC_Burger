-- Creae burgers_db database.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create burgers table.
CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(65),
devoured BOOLEAN);