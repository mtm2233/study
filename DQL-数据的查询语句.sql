-- DQL（Data Query Language）：数据查询语言；
--  可以通过DQL从数据库中查询记录；（重点）

# 创建products的表
CREATE TABLE IF NOT EXISTS `products` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	brand VARCHAR(20),
	title VARCHAR(100) NOT NULL,
	price DOUBLE NOT NULL,
	score DECIMAL(2,1),
	voteCnt INT,
	url VARCHAR(100),
	pid INT
);

# 1.基本查询
# 查询表中所有的字段以及所有的数据
SELECT * FROM products;

# 查询指定的字段
SELECT id, brand, price FROM products;
# 对字段结果起一个别名
SELECT id AS '序号', brand AS '品牌' FROM products;


# 2.where条件
# 2.1. 条件判断语句
# 案例：查询价格小于1000的手机
SELECT * FROM products WHERE price < 1000;

# 案例二：价格等于999的手机
SELECT * FROM products WHERE price = 999;
# 案例三：价格不等于999的手机
SELECT * FROM products WHERE price != 999;

# 案例四：查询品牌是华为的手机
SELECT * FROM products WHERE brand = '华为';

# 2.2. 逻辑运算语句
# 案例一：查询1000到2000之间的手机
SELECT * FROM products WHERE price > 1000 && price < 2000;
# BETWEEN AND 包含等于
SELECT * FROM `products` WHERE price BETWEEN 1099 AND 2000;
SELECT * FROM `products` WHERE price IN (1000, 2000);

# 案例二：价格在5000以上或者是品牌是华为的手机
SELECT * FROM products WHERE price > 5000 || brand = '华为';

# 将某些值设置为NULL
UPDATE products SET url = NULL WHERE brand = '华为';
# 查询某一个值为NULL
SELECT * FROM products WHERE url IS NULL;

# 2.3.模糊查询
SELECT * FROM products WHERE title LIKE '%8GB%';



# 3.对结果进行排序
-- SELECT * FROM products ORDER BY price ASC, score DESC;

SELECT * FROM products WHERE price > 2000 ORDER BY price ASC;

# 4.分页查询
# LIMIT limit OFFSET offset;
SELECT * FROM products LIMIT 5 OFFSET 1;
# Limit offset, limit;
SELECT * FROM products LIMIT 1,5;

