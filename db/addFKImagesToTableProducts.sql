ALTER TABLE `images` 
ADD CONSTRAINT `fk_product_image_id` FOREIGN KEY(`product_image_id`) REFERENCES `products`(`id`)
