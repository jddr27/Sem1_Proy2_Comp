/*CREATE USER 'daniel'@'%' IDENTIFIED WITH mysql_native_password BY 'daniel';
GRANT ALL PRIVILEGES ON company.* TO 'daniel'@'%';*/

CREATE TABLE company.employees (
first_name varchar(25),
last_name  varchar(25),
department varchar(15),
email  varchar(50)
);

 ENGINE = INNODB;

INSERT INTO employees (first_name, last_name, department, email)
VALUES ('Lorenz', 'Vanthillo', 'IT', 'lvthillo@mail.com');

INSERT INTO employees (first_name, last_name, department, email)
VALUES ('Daniel', 'De Leon', 'QA', 'daniel@mail.com');

INSERT INTO employees (first_name, last_name, department, email)
VALUES ('Brandon', 'Soto', 'DBA', 'brandon@mail.com');

INSERT INTO employees (first_name, last_name, department, email)
VALUES ('Jose', 'Navarro', 'IT', 'jose@mail.com');

  







