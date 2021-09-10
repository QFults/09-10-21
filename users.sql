DROP DATABASE IF EXISTS users_db;

CREATE DATABASE users_db;

USE users_db;
CREATE TABLE users (
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(25) UNIQUE NOT NULL,
    email VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    signedIn BOOL NOT NULL
);

USE users_db;
SELECT * FROM users 
WHERE username = 'jackdoe' 
OR email = 'johndoe@gmail.com';

USE users_db;
SELECT * FROM users 
WHERE signedIn = false;

USE users_db;
SELECT * FROM users 
WHERE NOT username = 'jackdoe';

USE users_db;
SELECT * FROM users 
ORDER BY username DESC;

USE users_db;
SELECT * FROM users 
WHERE username LIKE 'j_n%';

USE users_db;
INSERT INTO users (username, email, age, signedIn)
VALUES ('johndoe', 'johndoe@gmail.com', 45, true), ('janedoe', 'janedoe@gmail.com', 46, true), 
('jackdoe', 'jackdoe@gmail.com', 47, false), ('jennydoe', 'jennydoe@gmail.com', 48, false);

USE users_db;
INSERT INTO users (username, email, age, signedIn)
VALUES ('janetdoe', 'janetdoe@gmail.com', 48, false);

USE users_db;
UPDATE users
SET signedIn = true, age = 49
WHERE username = 'jennydoe';

USE users_db;
DELETE FROM users
WHERE username = 'jennydoe';