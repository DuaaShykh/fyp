-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fyp_db
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `vc_id` int DEFAULT NULL,
  `f_name` varchar(45) NOT NULL,
  `l_name` varchar(45) NOT NULL,
  `father_name` varchar(45) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `phone` int NOT NULL,
  `qualification` varchar(45) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `date` date DEFAULT NULL,
  `dob` date NOT NULL,
  `martial_status` varchar(45) NOT NULL,
  `cnic` varchar(45) NOT NULL,
  `religion` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `zip` int NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `hash` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `patient_id_UNIQUE` (`patient_id`),
  KEY `vc_id_idx` (`vc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,1,'Duaa','Shaikh','MM','dua@gmail.com','1234','Larkana',12345,'BE','female','2021-02-12','2000-03-03','UM','00000','Islam','Larkana','Pakistan',0,'1628540830165--.jpg',NULL),(2,2,'Iqra','Naz','AB','iqra@gmail.com','1234','Karachi',12345,'BE','female','2021-02-12','1999-08-18','UM','00000','Islam','Karachi','Pakistan',0,'1628537267620--.jpg',NULL),(3,2,'Sania','Zehra','YZ','sania@gmail.com','1234','Karachi',12345,'BE','female','2021-04-13','1999-02-02','UM','00000','Islam','Karachi','Pakistan',0,'1628537267620--.jpg',NULL),(4,2,'Sanam','Sangi','YZ','sanam@gmail.com','1234','Larkana',12345,'Doctor','female','2021-04-13','1995-05-09','UM','00000','Islam','Larkana','Pakistan',0,'1628537267620--.jpg',NULL),(5,3,'Falak','Naz','AB','falak@gmail.com','1234','Larkana',12345,'Student','female','2021-04-13','2001-02-05','UM','00000','Islam','Larkana','Pakistan',0,'1628537267620--.jpg',NULL),(6,1,'Narmeen','Khan','ERY','narmeen@gmail.com','1234','Hyderabad',12345,'BE','female','2021-04-11','1991-04-30','UM','00000','Islam','Hyderabad','Pakistan',0,'1628537267620--.jpg',NULL),(7,1,'kajol','Kumari','QWE','kajol@gmail.com','1234','Umarkot',12345,'BE','female','2021-04-11','2000-07-14','UM','00000','Islam','Umarkot','Pakistan',0,'1628537267620--.jpg',NULL),(8,3,'Mohsin','Abro','AS','mohsin@gmail.com','1234','Sukkur',12345,'BE','male','2021-04-10','1999-12-02','UM','00000','Islam','Sukkur','Pakistan',0,'1628537267620--.jpg',NULL),(9,2,'Anus','Khan','QW','anus@gmail.com','1234','Karachi',12345,'BE','male','2021-04-10','1992-02-23','UM','00000','Islam','Karachi','Pakistan',0,'1628537267620--.jpg',NULL),(10,1,'Aqib','Ahmed','VB','aqib@gmail.com','1234','Karachi',12345,'BE','male','2021-04-10','1995-08-24','UM','00000','Islam','Karachi','Pakistan',0,'1628537267620--.jpg',NULL),(40,1,'d6yuh','yfuguiki','tyhjuk','abx@gmail.com','00000','undefined',0,'ghjk,','gth','1999-06-09','1999-06-09','rtgyhju','000000','xcvb','sdfg','sdfgh',0,'1628884523045--.jpg',NULL),(41,1,'abc',' xyz','dfvgbhn','abc@gmail.com','1234','dfvgbn',12345,'zxdcfvgb','dfghb','2021-02-02','2021-02-02','xcvbn','1234567890,1234567890','dfvgbhnjfgbhn','khi','pak',11,'1630694749553--.jpg',NULL),(42,3,'Kajol','Kumari','xyz','kajol@gmail.com','1234','UmarKot',2345,'BE','Female','2021-02-02','1998-02-02','Single','1234567890,1234567890','Non-Muslim','Umarkot','sindh',345,'1630778952422--.jpg',NULL),(43,3,'Rabbia','Naz','xyz','rabbia@gmail.com','1234','Karachi',12345,'BE','Female','2021-09-05','1999-02-02','Married','1234567890,1234567890','islam','Karachi','sindh',34,'1630824005317--.jpg',NULL),(44,1,'Erum','Naz','xyz','erum@gmail.com','1234','Karachi',2345,'BE','Female','2021-09-19','1999-02-02','Single','1234567890,1234567890','islam','khi','sindh',321,'1632080399052--.jpg',NULL),(46,3,'Asad','Ahmed','xyz','asad@gmail.com','asad','Karachi',2345,'BE','Male','2021-02-02','1999-02-02','Single','1234567890,1234567890','islam','khi','pak',345,'1632165486755--.jpeg','0xefbf59f15c1f34bea9d8037b462c51fa34dd04dfac0119303fcc1ca22c2e7b03');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-21 20:01:02
