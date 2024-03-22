CREATE DATABASE IF NOT EXISTS kisdb;

USE kisdb;

DROP TABLE person;
DROP TABLE sex;

CREATE TABLE IF NOT EXISTS sex (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS person (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    dni VARCHAR(10),
    sex_id INT,
    phone_number INT,
    address VARCHAR(100),
    birth_date DATE,
    email VARCHAR(100),
    FOREIGN KEY (sex_id) REFERENCES sex(id)
);

INSERT INTO sex (name) VALUES
    ('Hombre'),
    ('Intersexual'),
    ('Mujer');

INSERT INTO person (first_name, last_name, dni, sex_id, phone_number, address, birth_date, email) 
VALUES ('Tom', 'Riddle', '99999999V', 1, '987654321', 'Dark Alley, Little Hangleton', '1926-12-31', 'lordvoldemort@example.com');

SELECT * FROM sex;
SELECT * FROM person;