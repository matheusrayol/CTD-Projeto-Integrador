ALTER TABLE `users`
ADD `function_id` BIGINT;

/* ALTER TABLE `users` 
ADD CONSTRAINT `fk_function_id` FOREIGN KEY(`function_id`) REFERENCES `functions`(`id`); */