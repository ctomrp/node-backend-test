CREATE DATABASE IF NOT EXISTS kisdb;

USE kisdb;

DROP TABLE person;
DROP TABLE sex;

CREATE TABLE IF NOT EXISTS sex (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS person (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    dni VARCHAR(20),
    sex_id INT,
    phone_number VARCHAR(20),
    address VARCHAR(100),
    birth_date DATE,
    email VARCHAR(100),
    FOREIGN KEY (sex_id) REFERENCES sex(id)
);

INSERT INTO sex (name) VALUES
    ('Hombre'),
    ('Intersexual'),
    ('Mujer');