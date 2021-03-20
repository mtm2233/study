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

# 查询指定的字段

# 对字段结果起一个别名



# 2.where条件
# 2.1. 条件判断语句
# 案例：查询价格小于1000的手机

# 案例二：价格等于999的手机

# 案例三：价格不等于999的手机


# 案例四：查询品牌是华为的手机


# 2.2. 逻辑运算语句
# 案例一：查询1000到2000之间的手机

# BETWEEN AND 包含等于


# 案例二：价格在5000以上或者是品牌是华为的手机


# 将某些值设置为NULL

# 查询某一个值为NULL


# 2.3.模糊查询



# 3.对结果进行排序


# 4.分页查询
# LIMIT limit OFFSET offset;
# Limit offset, limit;

