-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-01-2024 a las 18:53:26
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospital_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `rol` varchar(200) NOT NULL,
  `salary` double NOT NULL,
  `type` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `event`
--

CREATE TABLE `event` (
  `event_id` int(11) NOT NULL,
  `event_date` date NOT NULL,
  `event_type` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospital`
--

CREATE TABLE `hospital` (
  `employees` int(11) NOT NULL,
  `patients` int(11) NOT NULL,
  `medical_records` int(11) NOT NULL,
  `nurse_shifts` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `insurance_policy`
--

CREATE TABLE `insurance_policy` (
  `policy_number` int(200) NOT NULL,
  `provider` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_record`
--

CREATE TABLE `medical_record` (
  `record_id` int(11) NOT NULL,
  `patient` int(11) NOT NULL,
  `event` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nurse_shift`
--

CREATE TABLE `nurse_shift` (
  `shift_id` int(11) NOT NULL,
  `nurse` int(11) NOT NULL,
  `shift_date` int(11) NOT NULL,
  `shift_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patient`
--

CREATE TABLE `patient` (
  `id_patient` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `insurance_policy` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indices de la tabla `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`event_id`);

--
-- Indices de la tabla `hospital`
--
ALTER TABLE `hospital`
  ADD UNIQUE KEY `employees` (`employees`,`patients`,`medical_records`,`nurse_shifts`),
  ADD KEY `patients` (`patients`),
  ADD KEY `medical_records` (`medical_records`),
  ADD KEY `nurse_shifts` (`nurse_shifts`);

--
-- Indices de la tabla `insurance_policy`
--
ALTER TABLE `insurance_policy`
  ADD PRIMARY KEY (`policy_number`);

--
-- Indices de la tabla `medical_record`
--
ALTER TABLE `medical_record`
  ADD PRIMARY KEY (`record_id`),
  ADD UNIQUE KEY `patient` (`patient`),
  ADD UNIQUE KEY `event` (`event`);

--
-- Indices de la tabla `nurse_shift`
--
ALTER TABLE `nurse_shift`
  ADD PRIMARY KEY (`shift_id`),
  ADD UNIQUE KEY `nurse` (`nurse`);

--
-- Indices de la tabla `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id_patient`),
  ADD UNIQUE KEY `insurance_policy` (`insurance_policy`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `event`
--
ALTER TABLE `event`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medical_record`
--
ALTER TABLE `medical_record`
  MODIFY `record_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nurse_shift`
--
ALTER TABLE `nurse_shift`
  MODIFY `shift_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `patient`
--
ALTER TABLE `patient`
  MODIFY `id_patient` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `hospital`
--
ALTER TABLE `hospital`
  ADD CONSTRAINT `hospital_ibfk_1` FOREIGN KEY (`employees`) REFERENCES `employee` (`employee_id`),
  ADD CONSTRAINT `hospital_ibfk_2` FOREIGN KEY (`patients`) REFERENCES `patient` (`id_patient`),
  ADD CONSTRAINT `hospital_ibfk_3` FOREIGN KEY (`medical_records`) REFERENCES `medical_record` (`record_id`),
  ADD CONSTRAINT `hospital_ibfk_4` FOREIGN KEY (`nurse_shifts`) REFERENCES `nurse_shift` (`shift_id`);

--
-- Filtros para la tabla `medical_record`
--
ALTER TABLE `medical_record`
  ADD CONSTRAINT `medical_record_ibfk_1` FOREIGN KEY (`event`) REFERENCES `event` (`event_id`),
  ADD CONSTRAINT `medical_record_ibfk_2` FOREIGN KEY (`patient`) REFERENCES `patient` (`id_patient`);

--
-- Filtros para la tabla `nurse_shift`
--
ALTER TABLE `nurse_shift`
  ADD CONSTRAINT `nurse_shift_ibfk_1` FOREIGN KEY (`nurse`) REFERENCES `employee` (`employee_id`);

--
-- Filtros para la tabla `patient`
--
ALTER TABLE `patient`
  ADD CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`insurance_policy`) REFERENCES `insurance_policy` (`policy_number`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
