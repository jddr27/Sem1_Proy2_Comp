FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD 123456789
ENV MYSQL_DATABASE company
ENV MYSQL_USER daniel  
ENV MYSQL_PASSWORD daniel

ADD setup.sql /docker-entrypoint-initdb.d
