-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 02, 2025 at 02:10 PM
-- Server version: 11.8.3-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u281877782_pets`
--

-- --------------------------------------------------------

--
-- Table structure for table `adoption_requests`
--

CREATE TABLE `adoption_requests` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pet` varchar(50) NOT NULL,
  `submitted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `adoption_requests`
--

INSERT INTO `adoption_requests` (`id`, `name`, `address`, `phone`, `email`, `pet`, `submitted_at`) VALUES
(1, 'Raman Singh', 'C-97 Takash Aangan , Near Ajwa Road', '09016485754', 'RAMANSINGH.DEV0@GMAIL.COM', '8', '2025-11-02 03:53:11'),
(2, 'aman shukla', 'premnagar dehradun', '9065059103', 'akshukla22052000@gamil.com', '1', '2025-11-02 13:05:56'),
(3, 'aman shukla', 'premnagar dehradun', '9065059103', 'akshukla22052000@gamil.com', '1', '2025-11-02 13:05:59'),
(4, 'aman shukla', 'premnagar dehradun', '9065059103', 'akshukla22052000@gamil.com', '1', '2025-11-02 13:06:00'),
(5, 'aman shukla', 'premnagar dehradun', '9065059103', 'akshukla22052000@gamil.com', '1', '2025-11-02 13:06:00');

-- --------------------------------------------------------

--
-- Table structure for table `surrender_requests`
--

CREATE TABLE `surrender_requests` (
  `id` int(11) NOT NULL,
  `ownerName` varchar(100) DEFAULT NULL,
  `ownerPhone` varchar(20) DEFAULT NULL,
  `ownerEmail` varchar(100) DEFAULT NULL,
  `petName` varchar(100) DEFAULT NULL,
  `species` varchar(50) DEFAULT NULL,
  `breed` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `health` varchar(255) DEFAULT NULL,
  `preferredShelter` varchar(100) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `medicalHistory` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `surrender_requests`
--

INSERT INTO `surrender_requests` (`id`, `ownerName`, `ownerPhone`, `ownerEmail`, `petName`, `species`, `breed`, `age`, `gender`, `health`, `preferredShelter`, `reason`, `medicalHistory`) VALUES
(1, 'Raman Singh', '09016485754', 'RAMANSINGH.DEV0@GMAIL.COM', 'dog', 'Dog', 'ad', 33, 'Male', 'vac', '2', 'sdf', 'sdf'),
(2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'Raman', '09016485754', 'raman@inspire.qa', '34', 'Cat', 'ds', 23, 'Male', 'sd', '4', 'sdf', 'sdf'),
(4, 'Raman', '09016485754', 'raman@inspire.qa', '34', 'Cat', 'ds', 34, 'Male', 'sdf', '6', 'sdf', 'sdf'),
(5, 'Raman', '09016485754', 'raman@inspire.qa', '34', 'Cat', 'ds', 34, 'Male', 'sdf', '1', 'sdf', 'sdf'),
(6, 'Raman', '09016485754', 'raman@inspire.qa', '34', 'Rabbit', 'ds', 3, 'Male', 'SDF', '6', 'SDF', 'SDF'),
(7, 'Raman', '9016485754', 'raman@inspire.qa', 'Duno', 'Dog', 'df', 34, 'Male', 'ds', '7', 'sdf', 'sdf'),
(8, 'Diksha bhatt', '8077956364', 'dikshabhatt767@gamil.com', 'Billu', 'Cat', 'Manicoon', 2, 'Male', 'Good', '6', 'Not goooddd', ''),
(9, 'Sachin', '8077956364', 'dikshabhatt767@gmail.com', 'Hillu', 'Dog', 'Manicoon', 5, 'Male', 'Good', '7', 'Not good', ''),
(10, 'Gaurav .', '09557928562', 'gauravsinghnegi54@gmail.com', 'oxiii', 'Dog', 'german', 3, 'Male', 'good', '7', 'ekjjw', ''),
(11, 'Sonam ', '7668990424', 'sonamrawat1911@gmail.com', 'Babua', 'Dog', 'German shepherd ', 3, 'Male', 'Healthy ', '4', 'Thoda time rkhlo bs apne pass.... Aati hun mai fir jld hi ', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adoption_requests`
--
ALTER TABLE `adoption_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `surrender_requests`
--
ALTER TABLE `surrender_requests`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adoption_requests`
--
ALTER TABLE `adoption_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `surrender_requests`
--
ALTER TABLE `surrender_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
