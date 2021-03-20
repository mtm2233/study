-- DDL（Data Definition Language）：数据定义语言；
--  可以通过DDL语句对数据库或者表进行：创建、删除、修改等操作；

# 查看所有的表
-- SHOW TABLES;

# 新建表
-- CREATE TABLE isma;
-- CREATE TABLE IF NOT EXISTS isma(
-- 	name VARCHAR(20),
-- 	age INT
-- );

# 删除表
-- DROP TABLE isma;
-- DROP TABLE IF EXISTS isma;

# 查看表的结构
-- DESC isma;

# 查看创建表的SQL语句
-- SHOW CREATE TABLE ismaa;

# 完整的创建表的语法
CREATE TABLE IF NOT EXISTS user (
	id INT PRIMARY key AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT DEFAULT 0,
	phoneNum VARCHAR(20) UNIQUE DEFAULT '',
	createTime TIMESTAMP
);

# 修改表
# 1.修改表的名字
-- ALTER TABLE isma RENAME TO ismaa;
# 2.添加一个新的列
-- ALTER TABLE ismaa ADD `publishTime` DATETIME;
-- ALTER TABLE ismaa ADD `updateTime` DATETIME;
# 3.修改字段的名称
-- ALTER TABLE ismaa CHANGE `publishTime` `publishTime1` DATE;
# 4.修改字段的类型
-- ALTER TABLE ismaa MODIFY publishTime DATETIME;
# 5.删除某一个字段
-- ALTER TABLE ismaa DROP `updateTime`;

# 补充
# 根据一个表结构去创建另外一张表
-- CREATE TABLE ismaaaa LIKE user;

# 根据另外一个表中的所有内容，创建一个新的表

-- CREATE TABLE user2 (SELECT * FROM products);



