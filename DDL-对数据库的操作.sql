# 查看所有的数据库
-- SHOW DATABASES;

# 选择某一个数据库
-- USE study;

# 查看当前正在使用的数据库
-- SELECT DATABASE();

# 创建一个新的数据库
-- CREATE DATABASE isma;
-- CREATE DATABASE IF NOT EXISTS isma;
-- CREATE DATABASE IF NOT EXISTS isma
-- DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

# 删除数据库
-- DROP DATABASE isma;
-- DROP DATABASE IF EXISTS isma;

# 修改数据库的编码
ALTER DATABASE isma CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;