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
-- Table structure for table `verification`
--

DROP TABLE IF EXISTS `verification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verification` (
  `vn_id` int NOT NULL AUTO_INCREMENT,
  `vfc_id` int DEFAULT NULL,
  `verifier_id` int NOT NULL,
  `patient_id` int NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `purpose` varchar(45) DEFAULT NULL,
  `result` varchar(45) NOT NULL,
  PRIMARY KEY (`vn_id`),
  KEY `vfc_id_idx` (`vfc_id`),
  KEY `verifier_id_idx` (`verifier_id`),
  KEY `patient_id_idx` (`patient_id`),
  CONSTRAINT `verifier_id` FOREIGN KEY (`verifier_id`) REFERENCES `verifier` (`verifier_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vfc_id` FOREIGN KEY (`vfc_id`) REFERENCES `vf_center` (`vfc_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verification`
--

LOCK TABLES `verification` WRITE;
/*!40000 ALTER TABLE `verification` DISABLE KEYS */;
INSERT INTO `verification` VALUES (1,2,1,2,'2021-07-02','06:10:22','travel','V'),(2,1,2,1,'2021-06-01','02:00:44','shopping','V'),(3,2,1,3,'2021-06-01','12:00:40','shopping','V'),(4,2,1,7,'2021-07-02','03:30:12','shopping','V'),(5,2,1,5,'2021-07-02','09:21:00','travel','V'),(6,1,2,10,'2021-05-12','08:00:00','travel','V'),(7,3,2,8,'2021-06-01','05:42:22','shopping','NV'),(8,2,1,6,'2021-07-02','06:00:33','shopping','V'),(9,1,2,9,'2021-05-12','11:12:22','travel','NV'),(10,3,2,4,'2021-06-01','12:35:22','travel','NV');
/*!40000 ALTER TABLE `verification` ENABLE KEYS */;
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
