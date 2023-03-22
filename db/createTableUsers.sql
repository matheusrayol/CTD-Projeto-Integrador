CREATE TABLE IF NOT EXISTS `users`(
	`id` BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(50),
    `surname` VARCHAR(50),
    `email` VARCHAR(100),
    `password` VARCHAR(250)
)