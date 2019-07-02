docker run --name some-mysql \
-e MYSQL_ROOT_PASSWORD=123456789 \
-d my-mysql \
--character-set-server=utf8mb4 \
--collation-server=utf8mb4_unicode_ci \
--default-authentication-plugin=mysql_native_password
