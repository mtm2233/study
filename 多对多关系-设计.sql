# 1.基本数据的模拟
CREATE TABLE IF NOT EXISTS students (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT
);

CREATE TABLE IF NOT EXISTS courses (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	price DOUBLE
);

INSERT INTO `students` (name, age) VALUES('why', 18);
INSERT INTO `students` (name, age) VALUES('tom', 22);
INSERT INTO `students` (name, age) VALUES('lilei', 25);
INSERT INTO `students` (name, age) VALUES('lucy', 16);
INSERT INTO `students` (name, age) VALUES('lily', 20);

INSERT INTO `courses` (name, price) VALUES ('英语', 100);
INSERT INTO `courses` (name, price) VALUES ('语文', 666);
INSERT INTO `courses` (name, price) VALUES ('数学', 888);
INSERT INTO `courses` (name, price) VALUES ('历史', 80);
INSERT INTO `courses` (name, price) VALUES ('物理', 888);
INSERT INTO `courses` (name, price) VALUES ('地理', 333);


# 2.建立关系表
CREATE TABLE IF NOT EXISTS students_select_courses (
	student_id INT NOT NULL,
	course_id INT NOT NULL,
	FOREIGN KEY (student_id) REFERENCES students(id),
	FOREIGN KEY (course_id) REFERENCES courses(id),
	PRIMARY KEY(student_id, course_id)
);
-- CREATE TABLE IF NOT EXISTS `students_select_courses`(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	student_id INT NOT NULL,
-- 	course_id INT NOT NULL,
-- 	FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE,
-- 	FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE
-- );

# 3.学生选课
# why选择了英文、数学、历史
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (1, 1);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (1, 3);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (1, 4);


INSERT INTO `students_select_courses` (student_id, course_id) VALUES (3, 2);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (3, 4);


INSERT INTO `students_select_courses` (student_id, course_id) VALUES (5, 2);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (5, 3);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (5, 4);


# 4.查询的需求
# 4.1. 查询所有有选课的学生，选择了哪些课程
SELECT s.id id, s.name `name`, s.age age, c.`name` cname, c.price price from students s 
JOIN students_select_courses ssc ON s.id = ssc.student_id
JOIN courses c ON c.id = ssc.course_id;

-- SELECT s.id id, s.name `name`, s.age age, c.`name` cname, c.price price from students s 
-- JOIN students_select_courses ssc ON s.id = ssc.student_id
-- LEFT JOIN courses c ON c.id = ssc.course_id;


# 4.2. 查询所有的学生的选课情况
SELECT s.id id, s.name `name`, s.age age, c.`name` cname, c.price price from students s 
LEFT JOIN students_select_courses ssc ON s.id = ssc.student_id
LEFT JOIN courses c ON c.id = ssc.course_id;


# 4.3. 哪些学生是没有选课
-- SELECT s.id id, s.name `name`, s.age age from students s 
-- LEFT JOIN students_select_courses ssc ON s.id = ssc.student_id
-- WHERE ssc.course_id IS NULL;

SELECT s.id id, s.name `name`, s.age age, c.`name` cname, c.price price from students s 
LEFT JOIN students_select_courses ssc ON s.id = ssc.student_id
LEFT JOIN courses c ON c.id = ssc.course_id
WHERE ssc.course_id IS NULL;

# 4.4. 查询哪些课程是没有被选择的
-- SELECT c.`name` cname, c.price price from students_select_courses ssc
-- RIGHT JOIN courses c ON c.id = ssc.course_id
-- WHERE ssc.student_id IS NULL;

SELECT s.id id, s.name `name`, s.age age, c.`name` cname, c.price price from students s 
LEFT JOIN students_select_courses ssc ON s.id = ssc.student_id
RIGHT JOIN courses c ON c.id = ssc.course_id
WHERE s.id IS NULL;

# 4.5. 某一个学生选了哪些课程（why）
SELECT s.id id, s.name `name`, s.age age, c.`name` cname, c.price price from students s 
LEFT JOIN students_select_courses ssc ON s.id = ssc.student_id
LEFT JOIN courses c ON c.id = ssc.course_id
WHERE s.id = 1;








