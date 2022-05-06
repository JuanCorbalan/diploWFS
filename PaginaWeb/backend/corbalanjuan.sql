-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 06-05-2022 a las 23:03:12
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `corbalanjuan`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Las diez claves de la realidad', 'Frank Wilczek', 'En Las diez claves de la realidad el Premio Nobel de Física Frank Wilczek nos ofrece una sencilla pero profunda exploración de la realidad basada en las revelaciones de la ciencia moderna. Con claridad y un tono desenfadado nos guía a través de los conceptos esenciales que forman nuestra comprensión de lo que es el mundo y cómo funciona, de modo que llegamos\r\na ver nuestra realidad de una manera nueva: más grande, más completa y a la vez más extraña de lo que nos parecía antes.\r\nSintetizando diez temas clave, Wilczek investiga las ideas que forman nuestra comprensión del universo: tiempo, espacio, materia, energía, complejidad y complementariedad. Ahonda en la historia de la ciencia fundamental, explorando lo que sabemos y cómo lo sabemos, al tiempo que viaja a los horizontes del mundo científico para darnos una idea de lo que podríamos descubrir en un futuro no lejano. Brillante, lúcida y accesible, esta obra nos hará ver de otra forma el mundo y abrirá nuestra mente.', NULL),
(2, 'Cómo rompimos el mundo (y cómo podemos arreglarlo)', 'Dafna Nudelman', 'Cada día somos más los que nos preocupamos por los impactos de nuestras acciones y empezamos a cambiar nuestros hábitos de consumo y el modo en que nos relacionamos con la naturaleza. Es un camino lleno de obstáculos y contradicciones, un activismo imperfecto que elegimos porque aprendimos sobre las consecuencias que conlleva la forma actual de hacer las cosas.\r\nPero la información que circula, aunque abunda, no siempre es de fácil acceso ni se presenta clara y ordenada. Y muchas veces ahí está el desafío (y la confusión): se dice mucho pero se explica poco. ¿Por dónde empezar? ¿Mis acciones individuales cambian algo? ¿Qué impacto tiene lo que elijo comer o cómo me visto? ¿Qué tan malo es el plástico? ¿Qué tiene que ver mi basura con el calentamiento global? ¿Cómo es que en pos del “progreso” llegamos a esta crisis de la civilización? ¿Qué podemos hacer y cuáles son los desafíos para repensarlo todo y proyectar un futuro justo y sustentable que no nos excluya como especie?  ', NULL),
(4, 'Tituloprueba', 'subtitulo', 'cuerpo', NULL),
(8, 'Holaaa', 'ddddd', 'qqqqqq', 'sttvtnanxsxela5zgmqo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'laura', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
