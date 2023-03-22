CREATE TABLE IF NOT EXISTS `reservations`(
	`id` BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `hour_start_reservation` TIME,
    `date_begin` DATE,
    `date_end` DATE,
    `user_id_reservation` BIGINT,
    `products_id_reservation` BIGINT,
    CONSTRAINT `fk_user_id_reservation` FOREIGN KEY(`user_id_reservation`) REFERENCES `users`(`id`),
    CONSTRAINT `fk_products_id_reservation` FOREIGN KEY(`products_id_reservation`) REFERENCES `products`(`id`)
);