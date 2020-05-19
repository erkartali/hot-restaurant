DROP DATABASE IF EXISTS hotrestaurant;

CREATE DATABASE hotrestaurant;

USE hotrestaurant;

CREATE TABLE reservations(
    customer VARCHAR(50) NOT NULL,
    phoneNumber VARCHAR(20) NOT NULL,
    email VARCHAR (50) NOT NULL,
    uniqueid VARCHAR(50) NOT NULL,
    PRIMARY KEY (uniqueid)
);

INSERT INTO reservations (customer, phoneNumber, email, uniqueid)
VALUES 
("Brooke", "555-555-5555", "brooke@brookesucks.com", "brookesucks");


CREATE TABLE waiting(
    customer VARCHAR(50) NOT NULL,
    phoneNumber VARCHAR(20) NOT NULL,
    email VARCHAR (50) NOT NULL,
    uniqueid VARCHAR(50) NOT NULL,
    PRIMARY KEY (uniqueid)
);

INSERT INTO waiting (customer, phoneNumber, email, uniqueid)
VALUES 
("Brooke2", "555-555-2222", "brooke2@brookesucks.com", "brookesucks2");