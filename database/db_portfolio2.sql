-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 16, 2019 at 12:04 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `tags` varchar(300) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`ID`, `name`, `description`, `tags`, `image`) VALUES
(1, 'ThermoSecurity™ ', 'ThermoSecurity is a home automation service that is specifically designed to control smart home accessories ( temperature, lights, switches, cameras, etc.) and keep users informed about what’s happening around their property even when they’re away. Users can easily manage their smart ThermoSecurity devices via the HouseCom website, iOS or Android app or smartwatch.', 'ux, ui, c4d, motion design, front-end', 'project_1.jpg'),
(2, 'Interactive Infographic', 'History of the periodic elements is a still poster made into an interactive infographic. It highlights all the elements presented in the circular form table. The infographic was initially created as a static poster.', 'adobe ai, graphic design, illustration ', 'project_2.jpg'),
(3, 'BioDreamers', 'BioDreamers is a recent project that highlights the\r\nprocess of decellularization of human organs and reanimates them back into the natural\r\nscaffold of the original organ. It is essentially washing away the building blocks ‘cells’ of the\r\noriginal organs so that new cells can be sewn back into the organ matrix. These are called,\r\n‘laboratory organs’.\r\nThis process is the brainchild of Harald Ott and his researchers in the area of stem cell and\r\ngenetic development at Harvard Medical. Ottlab.mgh.harvard.edu ', 'graphic design, ai, photoshop, c4d, logo design', 'project_3.jpg'),
(4, 'Wave App', 'This is a UX and UI Design project for the travel shop. The application that highlights products for traveling and surfing. You can also potentially search for different types of boards: Surfboard, Wakeboard, Longboard, Skateboard. ', 'branding, logo design, ai, node js', 'project_4.jpg'),
(5, 'Poster', 'History of the periodic elements is a still poster made into an interactive infographic. It highlights all the elements presented in the circular form table. The infographic was initially created as a static poster.', 'infographic, ai, graphic design', 'project_5.jpg'),
(6, 'Watch band Design ', 'This is an apple watch band Design. The pattern was created in Adobe Illustrator and placed on the mockup. The pattern is made of simple shapes and solid colors. Watchbands are available in the grayscale version as well.', 'graphic design, ai, photoshop', 'project_6.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
