-- Inclusao da fk da tabela categories na tabela products:
ALTER TABLE `products`
ADD categories_id INT;

ALTER TABLE `products` 
ADD CONSTRAINT `fk_categories_id` FOREIGN KEY(`categories_id`) REFERENCES `categories`(`id`);


-- Inclusao da fk da tabela cities na tabela products:
ALTER TABLE `products`
ADD cities_id INT;

ALTER TABLE `products` 
ADD CONSTRAINT `fk_cities_id` FOREIGN KEY(`cities_id`) REFERENCES `cities`(`id`)


