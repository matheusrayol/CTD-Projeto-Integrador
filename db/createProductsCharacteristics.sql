CREATE TABLE IF NOT EXISTS `products_characteristics` (
	`id` BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    `product_id` BIGINT,
    `characteristic_id` BIGINT,
    CONSTRAINT `fk_product_id`  FOREIGN KEY(`product_id`) REFERENCES `products`(`id`),
    CONSTRAINT `fk_characteristics_id` FOREIGN KEY(`characteristic_id`) REFERENCES `characteristics`(`id`)
);

