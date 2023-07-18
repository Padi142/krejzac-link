CREATE TABLE `links` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`link` text NOT NULL DEFAULT (''),
	`short_link` text NOT NULL DEFAULT (''),
	`clicks` int NOT NULL DEFAULT 0,
	`added_on` datetime NOT NULL DEFAULT now()
);
