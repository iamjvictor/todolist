CREATE TABLE `clients` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `name` varchar(255),
  `email` varchar(255) default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `clients` (`id`,`name`,`email`) VALUES (1,"Gabriel","gabigol9@gmail.com");
INSERT INTO `clients` (`id`,`name`,`email`) VALUES (2,"Vitinho","isolei@gmail.com");
INSERT INTO `clients` (`id`,`name`,`email`) VALUES (3,"Pedro","fominha@gmail.com");