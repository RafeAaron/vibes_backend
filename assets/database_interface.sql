CREATE DATABASE IF NOT EXISTS vibes_database;

USE vibes_database;

CREATE TABLE IF NOT EXISTS users(
    user_id INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(30) NOT NULL UNIQUE,
    user_password VARCHAR(30) NOT NULL,
    user_email VARCHAR(40) NOT NULL,
    user_role VARCHAR(10) NOT NULL
);