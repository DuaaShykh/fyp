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
-- Table structure for table `vaccination`
--

DROP TABLE IF EXISTS `vaccination`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vaccination` (
  `v_id` int NOT NULL AUTO_INCREMENT,
  `patient_id` int DEFAULT NULL,
  `vc_id` int NOT NULL,
  `vaccine_id` int DEFAULT NULL,
  `doctor_id` int NOT NULL,
  `time` time DEFAULT NULL,
  `date` date NOT NULL,
  `dose` varchar(45) NOT NULL,
  `reason` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `hash` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`v_id`),
  KEY `patient_id_idx` (`patient_id`),
  KEY `vc_id_idx` (`vc_id`),
  KEY `doctor_id_idx` (`doctor_id`),
  KEY `vaccine_id_idx` (`vaccine_id`),
  CONSTRAINT `doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vaccine_id` FOREIGN KEY (`vaccine_id`) REFERENCES `vaccine` (`vaccine_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vc_id` FOREIGN KEY (`vc_id`) REFERENCES `vc_center` (`vc_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccination`
--

LOCK TABLES `vaccination` WRITE;
/*!40000 ALTER TABLE `vaccination` DISABLE KEYS */;
INSERT INTO `vaccination` VALUES (1,1,1,1,1,'12:03:00','2021-02-10','1stDose','recommended','SinoPharm',NULL),(2,3,2,3,2,'04:01:00','2021-04-11','Complete','self','Pfizer',NULL),(3,2,2,3,2,'05:00:00','2021-02-11','Complete','self','Pfizer',NULL),(4,7,1,2,1,'01:15:00','2021-04-11','1stDose','self','SinoVac',NULL),(5,9,2,2,2,'02:00:04','2021-04-10','1stDose','recommended','SinoVac',NULL),(6,5,3,1,2,'11:25:25','2021-04-13','Complete','recommended','SinoPharm',NULL),(7,10,1,4,3,'10:49:10','2021-04-10','Complete','self','Astra Zinca',NULL),(8,4,2,2,3,'09:00:54','2021-04-13','1stDose','self','SinoVac',NULL),(9,6,1,4,3,'02:50:12','2021-04-11','Complete','self','Astra Zinca',NULL),(10,8,3,4,1,'03:20:00','2021-04-10','Complete','recommended','Astra Zinca',NULL),(11,1,2,6,2,'04:20:00','2021-04-10','Complete','recommended','VICPS(Typhoid)',NULL),(12,1,1,5,1,'02:20:00','2021-03-10','Complete','recommended','Malaria',NULL),(13,2,2,5,3,'10:33:00','2021-04-13','Complete','Self','VICPS(Typhoid)',NULL),(14,41,2,2,2,'07:00:00','2021-02-02','1st Dose','Travelling','SinoVac',NULL),(16,42,3,3,2,'05:00:00','2021-02-02','Complete','Travelling','Pfizer',NULL),(17,42,2,3,3,'05:00:00','2021-02-02','Complete','Travelling','Pfizer',NULL),(19,43,3,3,2,'11:41:00','2021-09-05','Complete','Travelling','Pfizer',NULL),(20,43,1,5,2,'05:00:00','2021-02-02','Complete','Sick','Malaria',NULL);
/*!40000 ALTER TABLE `vaccination` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-21 20:01:01
