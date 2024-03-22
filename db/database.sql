CREATE DATABASE IF NOT EXISTS kisdb;

USE kisdb;

CREATE TABLE person (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45),
    last_name VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO person VALUES
    (1, 'Harry', 'Potter'),
    (2, 'Ronald', 'Weasley'),
    (3, 'Hermione', 'Granger'),
    (4, 'Dobby', NULL);
   
-- Insertar una persona con nombre y apellido
INSERT INTO person (name, last_name) VALUES ('Juan', 'Perez');

-- Insertar una persona con solo nombre
INSERT INTO person (name) VALUES ('Maria');

-- Insertar una persona con apellido pero sin nombre
INSERT INTO person (last_name) VALUES ('Gonzalez');

-- Insertar una persona sin nombre ni apellido
INSERT INTO person VALUES (DEFAULT, DEFAULT, DEFAULT);

SELECT * FROM person;