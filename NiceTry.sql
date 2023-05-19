-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 10 2023 г., 02:13
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `NiceTry`
--

-- --------------------------------------------------------

--
-- Структура таблицы `bookingHitsory`
--

CREATE TABLE `bookingHitsory` (
  `id` int NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `pc_id` int NOT NULL,
  `pc_type` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `Events`
--

CREATE TABLE `Events` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` longtext NOT NULL,
  `date_event` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Events`
--

INSERT INTO `Events` (`id`, `title`, `text`, `date_event`) VALUES
(18, 'CS:GO достигла рекордного пикового онлайна в истории шутера', 'CS:GO добилась рекордных значений пикового онлайна за все время существования шутера. Вечером 5 мая 2023 года в игре одновременно находились более 1,533 млн человек — прошлый пик пришелся на март, когда онлайн составил 1,519 млн. Статистикой поделился портал Steam Charts.\r\n\r\nВ апреле CS:GO также установила рекорд по среднему онлайну. Этот показатель составил 918 тыс. человек — лучшее значение с марта 2020 года.\r\n\r\n22 марта стартовало закрытое бета-тестирование Counter-Strike 2 — глобального обновления CS:GO с переходом на движок Source 2. Разработчики обещают улучшенную графику, систему тикрейта, звуки и другое. Полноценный релиз запланирован на лето 2023 года. ', '2023-05-06 05:00:00'),
(21, 'Ghbdtn', 'Как у тебя дела', '2023-05-06 05:00:00'),
(22, 'gdfgdfgd', 'fdgdfgdfg', '2023-05-06 06:00:00'),
(23, 'На каких ПК и смартфонах пойдет Honkai Star Rail — системные требования игры', 'После грандиозного успеха Genshin Impact студия HoYoverse, отвечавшая за создание игры, выпустила Honkai: Star Rail — многопользовательский пошаговый проект в духе популярных японских RPG. И главный вопрос, который мучает игроков, на каких ПК и смартфонах пойдет Honkai: Star Rail? Отвечаем кратко и без лишней воды. (Источник: https://cq.ru/articles/gaming/na-kakikh-pk-i-smartfonakh-poidet-honkai-star-rail-sistemnye-trebovaniia-igry)', '2023-05-07 05:00:00'),
(24, 'Когда появился Roblox', 'Roblox — одна из самых популярных платформ игр, которая завоевала сердца множества фанатов. Ее аудитория составляет более двухсот пятидесяти миллионов пользователей в месяц. Вдумайтесь в эту цифру! Она кажется какой-то нереальной! \r\nНо как много интересных фактов вы знаете об этой огромной площадке игр? Например, сколько лет «Роблоксу», или кто ее создатель? Это достаточно интересная история, которую мы и хотим вам рассказать.', '2023-05-07 05:00:00'),
(25, 'Привет Андрей', 'Как у тебя дела?', '2023-05-09 19:00:00');

-- --------------------------------------------------------

--
-- Структура таблицы `OrdinaryComputers`
--

CREATE TABLE `OrdinaryComputers` (
  `id` int NOT NULL,
  `isOccured` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `OrdinaryComputers`
--

INSERT INTO `OrdinaryComputers` (`id`, `isOccured`) VALUES
(1, 0),
(2, 0),
(3, 0),
(4, 0),
(5, 0),
(6, 0),
(7, 0),
(8, 0),
(9, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `user_id` int NOT NULL,
  `login` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `username` varchar(60) NOT NULL,
  `usersurname` varchar(60) NOT NULL,
  `mail` varchar(60) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Users`
--

INSERT INTO `Users` (`user_id`, `login`, `password`, `username`, `usersurname`, `mail`, `isAdmin`) VALUES
(13, 'misxikal', '123456', 'Михаил', 'Гуляев', 'mimimi@mail.ru', 1),
(14, 'N1ceK1d', '123456', 'Никита', 'Гуляев', 'pepsiCola@mail.ru', 1),
(15, 'kirill', '123456', 'Кирилл', 'Фалалеев', 'durachek@mail.ru', 0),
(16, 'xvjt,fyjt', 'zxvjt,fyjt', 'nasty', 'titenok', 'hastyatitenokaa@gmail.com', 0),
(17, 'od1n', '2451526425', 'Михаил', 'Гуляев', 'migulyaev.809@gmail.com', 0),
(19, 'lorderus', '112233', 'Тирион', 'Ланистер', 'mishikal@mail.ru', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `VipComputers`
--

CREATE TABLE `VipComputers` (
  `id` int NOT NULL,
  `isOccured` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `VipComputers`
--

INSERT INTO `VipComputers` (`id`, `isOccured`) VALUES
(1, 0),
(2, 0),
(3, 0),
(4, 0),
(5, 0),
(6, 0),
(7, 0),
(8, 0),
(9, 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `bookingHitsory`
--
ALTER TABLE `bookingHitsory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `pc_id` (`pc_id`),
  ADD KEY `pc_type` (`pc_type`);

--
-- Индексы таблицы `Events`
--
ALTER TABLE `Events`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `OrdinaryComputers`
--
ALTER TABLE `OrdinaryComputers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`);

--
-- Индексы таблицы `VipComputers`
--
ALTER TABLE `VipComputers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `bookingHitsory`
--
ALTER TABLE `bookingHitsory`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT для таблицы `Events`
--
ALTER TABLE `Events`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT для таблицы `OrdinaryComputers`
--
ALTER TABLE `OrdinaryComputers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `Users`
--
ALTER TABLE `Users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT для таблицы `VipComputers`
--
ALTER TABLE `VipComputers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
