-- DML（Data Manipulation Language）：数据操作语言；
--  可以通过DML语句对表进行：添加、删除、修改等操作；

# 插入数据
-- INSERT INTO users VALUES (110, 'why', '020-110110', '2020-10-20', '2020-11-11');
-- INSERT INTO users (`name`,telPhone,createTime,updateTime) VALUES ('abc', '110110', '2020-1-2', '2000-5-5');

# 需求：createTime和updateTime可以自动设置值
-- ALTER TABLE users MODIFY `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
-- ALTER TABLE users MODIFY `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

# 删除数据
# 删除所有的数据
-- DELETE FROM `user`;
# 删除符合条件的数据
-- DELETE FROM user WHERE id = 110;

# 更新数据
# 更新所有的数据
-- UPDATE user SET name = 'lily', telPhone = '1231231';
# 更新符合条件的数据
-- UPDATE user SET name = 'lily0', telPhone = '0000' WHERE id = 111;








