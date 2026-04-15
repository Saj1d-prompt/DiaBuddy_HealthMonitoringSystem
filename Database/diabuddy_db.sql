-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2026 at 02:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `diabuddy_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `doctor_id` bigint(20) UNSIGNED NOT NULL,
  `patient_id` bigint(20) UNSIGNED NOT NULL,
  `appointment_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'accepted',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `doctor_id`, `patient_id`, `appointment_date`, `start_time`, `end_time`, `status`, `created_at`, `updated_at`) VALUES
(1, 3, 2, '2026-04-15', '16:00:00', '16:15:00', 'accepted', '2026-04-15 04:13:10', '2026-04-15 04:13:10'),
(2, 4, 2, '2026-04-18', '10:00:00', '10:20:00', 'accepted', '2026-04-15 05:38:46', '2026-04-15 05:38:46');

-- --------------------------------------------------------

--
-- Table structure for table `blood_sugar_readings`
--

CREATE TABLE `blood_sugar_readings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `glucose_level` double NOT NULL,
  `category` varchar(255) NOT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `reading_time` datetime NOT NULL DEFAULT '2026-04-15 08:02:18',
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blood_sugar_readings`
--

INSERT INTO `blood_sugar_readings` (`id`, `glucose_level`, `category`, `notes`, `reading_time`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 85, 'Fasting', NULL, '2026-04-12 14:41:00', 2, '2026-04-15 02:41:53', '2026-04-15 02:41:53'),
(2, 89, 'Fasting', NULL, '2026-04-13 14:42:00', 2, '2026-04-15 02:42:09', '2026-04-15 02:42:09'),
(3, 92, 'Fasting', NULL, '2026-04-14 14:42:00', 2, '2026-04-15 02:42:23', '2026-04-15 02:42:23'),
(4, 82, 'Fasting', NULL, '2026-04-15 14:42:00', 2, '2026-04-15 02:42:38', '2026-04-15 02:42:38'),
(5, 172, 'After Meal', NULL, '2026-04-12 14:43:00', 2, '2026-04-15 02:44:04', '2026-04-15 02:44:04'),
(6, 180, 'After Meal', NULL, '2026-04-13 14:44:00', 2, '2026-04-15 02:44:19', '2026-04-15 02:44:19'),
(7, 190, 'After Meal', NULL, '2026-04-14 14:44:00', 2, '2026-04-15 02:45:01', '2026-04-15 02:45:01'),
(8, 180, 'After Meal', NULL, '2026-04-15 14:45:00', 2, '2026-04-15 02:45:13', '2026-04-15 02:45:13'),
(9, 120, 'Bedtime', NULL, '2026-04-12 14:49:00', 2, '2026-04-15 02:49:35', '2026-04-15 02:49:35'),
(10, 126, 'Bedtime', NULL, '2026-04-13 14:49:00', 2, '2026-04-15 02:49:47', '2026-04-15 02:49:47'),
(11, 139, 'Bedtime', NULL, '2026-04-14 14:49:00', 2, '2026-04-15 02:50:02', '2026-04-15 02:50:02'),
(12, 129, 'Bedtime', NULL, '2026-04-15 14:50:00', 2, '2026-04-15 02:50:23', '2026-04-15 02:50:23');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `department` varchar(255) NOT NULL,
  `specialization` varchar(255) DEFAULT NULL,
  `licenseNumber` varchar(255) NOT NULL,
  `yearOfExperience` varchar(255) NOT NULL,
  `profBio` varchar(255) NOT NULL,
  `highestDegree` varchar(255) NOT NULL,
  `medicalSchool` varchar(255) NOT NULL,
  `gradYear` varchar(255) NOT NULL,
  `awards` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `clinicName` varchar(255) NOT NULL,
  `clinicAddress` varchar(255) NOT NULL,
  `consultationHours` varchar(255) NOT NULL,
  `fee` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `department`, `specialization`, `licenseNumber`, `yearOfExperience`, `profBio`, `highestDegree`, `medicalSchool`, `gradYear`, `awards`, `phoneNumber`, `clinicName`, `clinicAddress`, `consultationHours`, `fee`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'cardiology', 'Diabetes, Thyroid Diseases, Hormonal Disorders, Metabolic Disorders', 'D001', '20', 'An Honorary Senior Consultant at BIRDEM General Hospital, considered a pioneer in endocrinology and diabetology in Bangladesh.', 'MBBS (Dhaka), MD (Endocrinology & Metabolism)', 'Dhaka Medical College', '1990', NULL, '01847259771', 'BIRDEM Specialized Chamber Complex', 'Main Building, 122, Kazi Nazrul Islam Avenue, Shahbag, Dhaka', 'Thursday, Friday', '2000', 3, '2026-04-15 03:12:28', '2026-04-15 03:12:28'),
(2, 'neurology', 'Diabetes', '12865A95', '12', 'Chief Consultant\nClinical Cardiology', 'MBBS, DCM, MCPS (Medicine), MD (Cardiology)', 'Dhaka Medical College', '2001', NULL, '01714 000770', 'Mount Adora Hospital', 'Mount Adora Hospital, Akhalia.', 'Saturday, Sunday', '1500', 4, '2026-04-15 04:07:20', '2026-04-15 04:07:20');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hospitals`
--

CREATE TABLE `hospitals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('hospital','diagnosis_center') NOT NULL,
  `name` varchar(255) NOT NULL,
  `license_number` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hospitals`
--

INSERT INTO `hospitals` (`id`, `type`, `name`, `license_number`, `address`, `city`, `phone`, `email`, `is_active`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'hospital', 'Dhaka Medical College Hospital', 'DMCH01', 'Secretariat Road, Bakshibazar, Dhaka 1000', 'Dhaka', '56451851', 'dmch@gmail.com', 1, 1, '2026-04-15 02:09:34', '2026-04-15 02:09:34'),
(2, 'hospital', 'General Hospital, Sirajganj', 'GHS01', 'Sadar Hospital Rd, Sirajganj 6700, Bangladesh', 'Sirajganj', '01741171063', 'ghs@gmail.com', 1, 1, '2026-04-15 02:10:41', '2026-04-15 02:10:41'),
(3, 'hospital', 'Evercare Hospital Dhaka', 'ehd02', 'Plot 81, Block-E, Bashundhara Residential Area, Dhaka 1229', 'Dhaka', '09666710678', 'ehd@gmail.com', 1, 1, '2026-04-15 02:11:43', '2026-04-15 02:11:43'),
(4, 'hospital', 'Square Hospital Dhaka', 'shd03', '18/F, Bir Uttam Qazi Nuruzzaman Sarak, West Panthapath, Dhaka 1205', 'Dhaka', '1542100416', 'shd@gmail.com', 1, 1, '2026-04-15 02:12:21', '2026-04-15 02:12:21'),
(5, 'hospital', 'Shaheed M. Monsur Ali Medical College Hospital', 'smmamch02', 'CMXC+JV7, Sirajganj, Bangladesh', 'Sirajganj', '484518742187', 'smmamch@gmail.com', 1, 1, '2026-04-15 02:13:18', '2026-04-15 02:13:18'),
(6, 'hospital', 'Avicenna Hospital', 'ahs03', 'Sirajganj 6700, Bangladesh', 'Sirajganj', '01711378072', 'ahs@gmail.com', 1, 1, '2026-04-15 02:14:27', '2026-04-15 02:14:27'),
(7, 'hospital', 'BIRDEM General Hospital', 'birdem04', 'Secretariat Road, Bakshibazar, Dhaka 1000', 'Dhaka', '4871248421', 'birdem@gmail.com', 1, 1, '2026-04-15 02:15:30', '2026-04-15 02:15:30'),
(8, 'hospital', 'Popular Medical College Hospital', 'pmch05', 'House 2, Road 10, Dhanmondi, Dhaka 1205', 'Dhaka', '15412454231', 'pmch@gmail.com', 1, 1, '2026-04-15 02:16:49', '2026-04-15 02:16:49'),
(9, 'hospital', 'Medinova Hospital Complex Sirajganj', 'mhcs04', 'Dorgah Rd, Sirajganj 6700, Bangladesh', 'Sirajganj', '075162730', 'mhcs@gmail.com', 1, 1, '2026-04-15 02:18:31', '2026-04-15 02:18:31'),
(10, 'hospital', 'Rajshahi Medical College Hospital', 'rmch01', 'Medical College Road, Rajshahi 6000', 'Rajshahi', '1545410548', 'rmch@gmail.com', 1, 1, '2026-04-15 02:19:29', '2026-04-15 02:19:29'),
(11, 'hospital', 'Islami Bank Medical College Hospital Rajshahi', 'ibmchr02', 'Airport Road, Nawdapara, Rajshahi', 'Rajshahi', '15451638942', 'ibmchr@gmail.com', 1, 1, '2026-04-15 02:20:33', '2026-04-15 02:20:33'),
(12, 'hospital', 'Shaheed Ziaur Rahman Medical College Hospital', 'szrmch01', 'Bogura 5800, Bangladesh', 'Bogura', '44456897546', 'szrmch@gmail.com', 1, 1, '2026-04-15 02:21:47', '2026-04-15 02:21:47'),
(13, 'hospital', '250 Bedded Mohammad Ali Hospital', 'bmah02', 'Sherpur Road, Bogura 5800', 'Bogura', '01730324803', 'bmah@gmail.com', 1, 1, '2026-04-15 02:23:09', '2026-04-15 02:23:09'),
(14, 'hospital', 'Rajshahi Metropolitan Hospital', 'rmh03', 'Alupatti, Rajshahi', 'Rajshahi', '597851549', 'rmh@gmail.com', 1, 1, '2026-04-15 02:24:09', '2026-04-15 02:24:09'),
(15, 'diagnosis_center', 'Ibn Sina Diagnostic and Imaging Center', 'isdic01', 'House 48, Road 9A, Dhanmondi, Dhaka 1209', 'Dhaka', '09610010615', 'isdic@gmail.com', 1, 1, '2026-04-15 02:25:42', '2026-04-15 02:25:42'),
(16, 'diagnosis_center', 'Lab Science Diagnostic', 'lbs02', '153 Green Road, Panthapath, Dhaka 1205', 'Dhaka', '01819992556', 'lbs@gmail.com', 1, 1, '2026-04-15 02:26:36', '2026-04-15 02:26:36'),
(17, 'diagnosis_center', 'Health Aid Diagnostic And Consultation Center', 'hadacc01', 'Mujib Road, Sirajganj', 'Sirajganj', '8487541278', 'hadacc@gmail.com', 1, 1, '2026-04-15 02:27:48', '2026-04-15 02:27:48'),
(18, 'hospital', 'AR Digital Diagnostic and Consultation Centre', 'arddcc02', 'Ajmeri Complex, Mujib Rd, Sirajganj 6700', 'Sirajganj', '01995419743', 'arddcc@gmail.com', 1, 1, '2026-04-15 02:28:53', '2026-04-15 02:28:53'),
(19, 'diagnosis_center', 'Popular Diagnostic Centre Rajshahi', 'pdcr01', 'Chowdhury Tower, Chowdhury Tower, Luxmipur, 6000, 306 Ct Station Rd, Rajshahi 6000', 'Rajshahi', '18751897', 'pdcr@gmail.com', 1, 1, '2026-04-15 02:30:08', '2026-04-15 02:30:08'),
(20, 'diagnosis_center', 'Lab Aid Diagnostic Bogura', 'ladb01', 'House-1872, Sherpur Road, Latifpur Colony, Bogura – 5800', 'Bogura', '01766662777', 'ladb@gmail.com', 1, 1, '2026-04-15 02:31:24', '2026-04-15 02:31:24');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `medical_reports`
--

CREATE TABLE `medical_reports` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `reportType` varchar(255) NOT NULL,
  `reportDate` date NOT NULL,
  `labName` varchar(255) NOT NULL,
  `filePath` varchar(255) NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medical_reports`
--

INSERT INTO `medical_reports` (`id`, `reportType`, `reportDate`, `labName`, `filePath`, `comments`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'HbA1c', '2026-04-12', 'A Lab', 'medical_reports/j1hnzsh2H6hQenjxgxzi3qJoOr3ZyyLgvlMwTSxM.png', '', 2, '2026-04-15 02:51:13', '2026-04-15 02:51:13'),
(2, 'HbA1c', '2026-04-13', 'B Lab', 'medical_reports/8V9AAtSlZLGkyVO2xQmu4l41QoZIf6nY5nfBZn6y.pdf', 'See Doctor', 2, '2026-04-15 02:51:52', '2026-04-15 02:51:52'),
(3, 'FBS', '2026-04-14', 'A Lab', 'medical_reports/1UErvQRMJhARrQslsYyytQUwNwHGY20V1D2pZ5Su.png', 'Normal', 2, '2026-04-15 02:52:20', '2026-04-15 02:52:20'),
(4, 'Lipid Profile', '2026-04-15', 'C Lab', 'medical_reports/qliiZuBBLpjDtm4u10lWHk8N3CWPahjYVezyFveI.pdf', '', 2, '2026-04-15 02:52:37', '2026-04-15 02:52:37');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_02_12_040618_create_personal_access_tokens_table', 1),
(5, '2026_02_15_052650_create_people_table', 1),
(6, '2026_02_15_082115_add_is_profile_complete_to_users_table', 1),
(7, '2026_02_18_081428_create_blood_sugar_readings_table', 1),
(8, '2026_02_22_095949_create_medical_reports_table', 1),
(9, '2026_03_06_074656_create_doctors_table', 1),
(10, '2026_03_09_085816_create_hospitals_table', 1),
(11, '2026_03_19_090515_create_schedules_table', 1),
(12, '2026_03_19_090715_create_appointments_table', 1),
(13, '2026_03_29_014655_create_prescriptions_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `number` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `height` double NOT NULL,
  `weight` double NOT NULL,
  `blood_group` varchar(255) NOT NULL,
  `diabetes_type` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`id`, `number`, `gender`, `address`, `height`, `weight`, `blood_group`, `diabetes_type`, `user_id`, `created_at`, `updated_at`) VALUES
(1, '0171234567', 'male', 'Dhaka, Bangladesh', 167, 75, 'O+', 'prediabetes', 2, '2026-04-15 02:37:20', '2026-04-15 05:39:14'),
(2, '1234567', 'male', 'Rajshahi, Bangladesh', 180, 76, 'B+', 'type2', 5, '2026-04-15 04:30:14', '2026-04-15 04:30:14'),
(3, '1234567890', 'male', 'Bogura, Bangladesh', 183, 70, 'AB+', 'type1', 6, '2026-04-15 04:32:21', '2026-04-15 04:32:21'),
(5, '123789456', 'male', 'Dhaka, Bangladesh', 179, 68, 'AB+', 'type2', 8, '2026-04-15 04:37:26', '2026-04-15 04:37:26');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '6a8db58c663d2abc74b53fe88069beb34f39d32238a430ee8003ef16a28b18d2', '[\"*\"]', '2026-04-15 02:31:55', NULL, '2026-04-15 02:06:49', '2026-04-15 02:31:55'),
(2, 'App\\Models\\User', 2, 'auth_token', '83fb7527e8d60d062f0f8798dae35ed1962483f3de43e596a927e406d37905ca', '[\"*\"]', '2026-04-15 02:54:31', NULL, '2026-04-15 02:36:00', '2026-04-15 02:54:31'),
(3, 'App\\Models\\User', 1, 'auth_token', 'e07fd0d72995319719ce13fa11590cd41d4d560a4297af9e7eccc815300b56cc', '[\"*\"]', '2026-04-15 04:01:53', NULL, '2026-04-15 02:54:56', '2026-04-15 04:01:53'),
(4, 'App\\Models\\User', 3, 'auth_token', '0de795f9ef6b8af097ca21bd3cd843e89e42a7497a08301fa40df4c8e3843e38', '[\"*\"]', '2026-04-15 03:27:47', NULL, '2026-04-15 03:04:22', '2026-04-15 03:27:47'),
(5, 'App\\Models\\User', 3, 'auth_token', '54f8cf311ff7c831b274a64bbd8d3e33a9699345c192c3e1ffa601594b1f167b', '[\"*\"]', '2026-04-15 04:02:25', NULL, '2026-04-15 03:28:03', '2026-04-15 04:02:25'),
(6, 'App\\Models\\User', 4, 'auth_token', '32e292d9ee7f7a3c52994fc3378dab111cf55aec2ed5712930ead35f0109b617', '[\"*\"]', '2026-04-15 04:10:20', NULL, '2026-04-15 04:02:41', '2026-04-15 04:10:20'),
(7, 'App\\Models\\User', 2, 'auth_token', 'a79513f3c75e51ef3860be870a09387f4bbc8baf7e8cb10b4bf118746e4bfed8', '[\"*\"]', '2026-04-15 04:13:10', NULL, '2026-04-15 04:11:01', '2026-04-15 04:13:10'),
(8, 'App\\Models\\User', 3, 'auth_token', 'd3c6dfaf53d13a5bc770c838b953921c72ffaff69ad49a82e686ac5910696f9a', '[\"*\"]', '2026-04-15 04:28:23', NULL, '2026-04-15 04:13:28', '2026-04-15 04:28:23'),
(9, 'App\\Models\\User', 5, 'auth_token', '63f107f63e21d853a315a9ec58bb8087734533cd470548efd87ae6e450b05d4e', '[\"*\"]', '2026-04-15 04:30:57', NULL, '2026-04-15 04:29:31', '2026-04-15 04:30:57'),
(10, 'App\\Models\\User', 6, 'auth_token', '687aef858558142056cc9cea2ef178c96d3c778cd903db3e08a1f50bce4538c4', '[\"*\"]', '2026-04-15 04:33:16', NULL, '2026-04-15 04:31:45', '2026-04-15 04:33:16'),
(11, 'App\\Models\\User', 1, 'auth_token', 'c83eae70e4ca67cad72cd311589afe9df775fbb46602592e2587d26886a5baed', '[\"*\"]', '2026-04-15 04:33:31', NULL, '2026-04-15 04:33:29', '2026-04-15 04:33:31'),
(12, 'App\\Models\\User', 7, 'auth_token', 'cd341c507a20cfce85d0a25fdf665b50ee697735b487264f2775ded5d7687e3e', '[\"*\"]', '2026-04-15 04:35:51', NULL, '2026-04-15 04:35:08', '2026-04-15 04:35:51'),
(13, 'App\\Models\\User', 8, 'auth_token', 'a81867dded30d2877404271d1a1e60ba9138a48e5db149ef6b58193f06e3db5e', '[\"*\"]', '2026-04-15 04:37:40', NULL, '2026-04-15 04:36:44', '2026-04-15 04:37:40'),
(14, 'App\\Models\\User', 2, 'auth_token', '2bb631d2a7518276f63b4c336061a065c872f9ad7fbbc4971a6b02445c81c778', '[\"*\"]', '2026-04-15 05:09:12', NULL, '2026-04-15 04:38:17', '2026-04-15 05:09:12'),
(15, 'App\\Models\\User', 1, 'auth_token', 'eda91f152d6cc6a752ff78764a49caef2233a24bfbb929b057cdfb039ba10103', '[\"*\"]', '2026-04-15 05:20:56', NULL, '2026-04-15 04:39:03', '2026-04-15 05:20:56'),
(16, 'App\\Models\\User', 3, 'auth_token', '012de23970770a6774d7c97326803f65ea375f1fc53437c8a8263e00f6b6c884', '[\"*\"]', '2026-04-15 05:29:00', NULL, '2026-04-15 05:09:23', '2026-04-15 05:29:00'),
(17, 'App\\Models\\User', 1, 'auth_token', 'bb5617abfa8a8e88c55f7a5ca7f07f31ace020239e61ea47a05ee927f728a41f', '[\"*\"]', '2026-04-15 05:24:05', NULL, '2026-04-15 05:23:53', '2026-04-15 05:24:05'),
(18, 'App\\Models\\User', 3, 'auth_token', 'f4b582b0a3a4805ad57d2e818a05ec17da03137873996b8c9224489d2f8b847e', '[\"*\"]', '2026-04-15 05:25:56', NULL, '2026-04-15 05:24:30', '2026-04-15 05:25:56'),
(19, 'App\\Models\\User', 2, 'auth_token', 'a575bfdaf1a94394fa2190e31f625aa4ff7bf2cea67dfb8ec0724a3111a576e8', '[\"*\"]', '2026-04-15 05:27:13', NULL, '2026-04-15 05:26:15', '2026-04-15 05:27:13'),
(20, 'App\\Models\\User', 3, 'auth_token', '4fac663c7c4036425336e27f4b8840cbe2f36c08ac7794c0beaa7b05cd839d0a', '[\"*\"]', '2026-04-15 05:27:40', NULL, '2026-04-15 05:27:31', '2026-04-15 05:27:40'),
(21, 'App\\Models\\User', 1, 'auth_token', '18d67bf731ad8d3af85b6752355a1355887004c6eb8493063bad68243b8e54f9', '[\"*\"]', '2026-04-15 05:28:25', NULL, '2026-04-15 05:27:55', '2026-04-15 05:28:25'),
(22, 'App\\Models\\User', 1, 'auth_token', '8dfc0f96fc7485862c7635d63eb273e3b32fe432dc646f3a888bcbc8b7836284', '[\"*\"]', '2026-04-15 05:35:35', NULL, '2026-04-15 05:35:15', '2026-04-15 05:35:35'),
(23, 'App\\Models\\User', 3, 'auth_token', '278dc2faf4c26fbbc796d20024fe37d6adfa45d94f25ea344fffb43c2523b1cf', '[\"*\"]', '2026-04-15 05:36:39', NULL, '2026-04-15 05:35:50', '2026-04-15 05:36:39'),
(24, 'App\\Models\\User', 2, 'auth_token', '017dae3aae2659d9b81400eae51c63dc715708c00f50531ff22ff4db6610de09', '[\"*\"]', '2026-04-15 05:39:15', NULL, '2026-04-15 05:37:06', '2026-04-15 05:39:15'),
(25, 'App\\Models\\User', 1, 'auth_token', 'cae09e906edec81f7c31badcee844d81835b65e0ca893575a4a3debdaa632465', '[\"*\"]', '2026-04-15 05:39:59', NULL, '2026-04-15 05:39:32', '2026-04-15 05:39:59'),
(26, 'App\\Models\\User', 4, 'auth_token', 'dc5ce62f2f519d1f454feb828143153edb25744eb94a1e8d988aa415ce239859', '[\"*\"]', '2026-04-15 05:40:29', NULL, '2026-04-15 05:40:16', '2026-04-15 05:40:29'),
(27, 'App\\Models\\User', 3, 'auth_token', '9ec969f0dac83f9a37f8d90ab6557ac6e5608a6805272ebdd4b83c7d35156662', '[\"*\"]', '2026-04-15 05:41:13', NULL, '2026-04-15 05:40:44', '2026-04-15 05:41:13'),
(28, 'App\\Models\\User', 2, 'auth_token', '76d3642a2304fbd6d626e35891c4c7141bd475b7e1cc2156ada6e630b55c26b8', '[\"*\"]', '2026-04-15 05:41:43', NULL, '2026-04-15 05:41:28', '2026-04-15 05:41:43');

-- --------------------------------------------------------

--
-- Table structure for table `prescriptions`
--

CREATE TABLE `prescriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `medicine_name` varchar(255) NOT NULL,
  `dosage` varchar(255) NOT NULL,
  `frequency` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `notes` text DEFAULT NULL,
  `doctor_id` bigint(20) UNSIGNED NOT NULL,
  `patient_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prescriptions`
--

INSERT INTO `prescriptions` (`id`, `medicine_name`, `dosage`, `frequency`, `duration`, `notes`, `doctor_id`, `patient_id`, `created_at`, `updated_at`) VALUES
(1, 'Medicine A', '1 Pill', '1+1+0', '5Days', NULL, 3, 2, '2026-04-15 05:25:56', '2026-04-15 05:25:56'),
(2, 'Medicine D', '1 Pill', '1+1+0', '5Days', 'No', 3, 2, '2026-04-15 05:25:56', '2026-04-15 05:25:56'),
(3, 'Medicine C', '2 Tablets', '1+0+0', '2Days', NULL, 3, 2, '2026-04-15 05:41:13', '2026-04-15 05:41:13');

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `day` enum('saturday','sunday','monday','tuesday','wednesday','thursday','friday') NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `schedules`
--

INSERT INTO `schedules` (`id`, `user_id`, `day`, `start_time`, `end_time`, `created_at`, `updated_at`) VALUES
(1, 3, 'thursday', '16:00:00', '16:15:00', '2026-04-15 03:52:33', '2026-04-15 03:52:33'),
(3, 3, 'thursday', '16:20:00', '16:35:00', '2026-04-15 03:53:33', '2026-04-15 03:53:33'),
(4, 3, 'thursday', '16:40:00', '16:55:00', '2026-04-15 03:53:57', '2026-04-15 03:53:57'),
(5, 3, 'friday', '16:00:00', '16:15:00', '2026-04-15 03:54:26', '2026-04-15 03:54:26'),
(6, 3, 'friday', '16:20:00', '16:35:00', '2026-04-15 03:54:49', '2026-04-15 03:54:49'),
(7, 3, 'friday', '16:40:00', '16:55:00', '2026-04-15 03:55:14', '2026-04-15 03:55:14'),
(8, 4, 'saturday', '10:00:00', '10:20:00', '2026-04-15 04:07:52', '2026-04-15 04:07:52'),
(9, 4, 'saturday', '10:25:00', '10:45:00', '2026-04-15 04:08:24', '2026-04-15 04:08:24'),
(10, 4, 'saturday', '10:50:00', '11:10:00', '2026-04-15 04:08:50', '2026-04-15 04:08:50'),
(11, 4, 'sunday', '10:00:00', '10:20:00', '2026-04-15 04:09:20', '2026-04-15 04:09:20'),
(12, 4, 'sunday', '10:25:00', '10:45:00', '2026-04-15 04:09:51', '2026-04-15 04:09:51'),
(13, 4, 'sunday', '10:50:00', '11:10:00', '2026-04-15 04:10:12', '2026-04-15 04:10:12');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'patient',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `is_profile_complete` tinyint(1) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `date_of_birth`, `role`, `email_verified_at`, `password`, `is_profile_complete`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', '2000-12-01', 'admin', NULL, '$2y$10$yLq2W9NzMr69OfUH4IdA..kFaIBdSGkACcLMU7DkChi7bwqKn0ZQu', 1, NULL, NULL, NULL),
(2, 'Sajid Ul Islam', 'sajid@gmail.com', '2000-12-01', 'patient', NULL, '$2y$12$0AfMnZr3PQDmZWkPsRsPd.LtmTtGoWg2GTV49EPGVo/gikEAmIJJ.', 1, NULL, '2026-04-15 02:35:50', '2026-04-15 02:37:20'),
(3, 'Prof. Faruque Pathan', 'faruque@gmail.com', '1977-06-21', 'doctor', NULL, '$2y$12$c1IF9dwucXcID6m0qGzFDubeU.Jx.CpV7PvO0jkFm6UU/BMsUKz8y', 1, NULL, '2026-04-15 03:01:14', '2026-04-15 03:12:28'),
(4, 'Professor Dr. A.H.M. Akhtaruzzaman', 'akhtaruzzaman@gmail.com', '1979-02-27', 'doctor', NULL, '$2y$12$ynGgbfndnsEXH0UiiE4aluKqYkOTwOyAk4OmN8EXyfLGZqXOx50ta', 1, NULL, '2026-04-15 03:02:13', '2026-04-15 04:07:20'),
(5, 'Aminul Islam', 'aminul@gmail.com', '1987-09-19', 'patient', NULL, '$2y$12$gJX9DOeWn7E/3nAtUxuEr.jjRgfKXm3ZU93k11ni4yw/yJX3kUSaO', 1, NULL, '2026-04-15 04:29:20', '2026-04-15 04:30:14'),
(6, 'Anisul Islam', 'anisul@gmail.com', '1992-02-11', 'patient', NULL, '$2y$12$tJostcWM.DCJsWPjh4Gb3eBj.Nbo1gXnsv7BOONzNDZey9EQsTILq', 1, NULL, '2026-04-15 04:31:37', '2026-04-15 04:32:21'),
(8, 'Anik Islam', 'anik@gmail.com', '1996-11-03', 'patient', NULL, '$2y$12$VRgSaLq1pm3wtU1Jgo3FGufZUk8hu5Mr4wKbzhjWfk6h4ux0QslHe', 1, NULL, '2026-04-15 04:36:33', '2026-04-15 04:37:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appointments_doctor_id_foreign` (`doctor_id`),
  ADD KEY `appointments_patient_id_foreign` (`patient_id`);

--
-- Indexes for table `blood_sugar_readings`
--
ALTER TABLE `blood_sugar_readings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blood_sugar_readings_user_id_foreign` (`user_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `doctors_licensenumber_unique` (`licenseNumber`),
  ADD KEY `doctors_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `hospitals_license_number_unique` (`license_number`),
  ADD KEY `hospitals_user_id_foreign` (`user_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medical_reports`
--
ALTER TABLE `medical_reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `medical_reports_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`),
  ADD KEY `person_user_id_foreign` (`user_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prescriptions_doctor_id_foreign` (`doctor_id`),
  ADD KEY `prescriptions_patient_id_foreign` (`patient_id`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `schedules_user_id_foreign` (`user_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `blood_sugar_readings`
--
ALTER TABLE `blood_sugar_readings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hospitals`
--
ALTER TABLE `hospitals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medical_reports`
--
ALTER TABLE `medical_reports`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `person`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `prescriptions`
--
ALTER TABLE `prescriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_doctor_id_foreign` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `appointments_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `blood_sugar_readings`
--
ALTER TABLE `blood_sugar_readings`
  ADD CONSTRAINT `blood_sugar_readings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `doctors_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD CONSTRAINT `hospitals_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `medical_reports`
--
ALTER TABLE `medical_reports`
  ADD CONSTRAINT `medical_reports_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `person`
--
ALTER TABLE `person`
  ADD CONSTRAINT `person_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD CONSTRAINT `prescriptions_doctor_id_foreign` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `prescriptions_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `schedules`
--
ALTER TABLE `schedules`
  ADD CONSTRAINT `schedules_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
