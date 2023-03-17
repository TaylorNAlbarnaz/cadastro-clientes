-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Mar-2023 às 21:25
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cadastros`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `nascimento` date NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `celular` varchar(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `endereco` varchar(50) NOT NULL,
  `observacoes` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacoes`) VALUES
(1, 'Fulano de Souza', '1999-01-01', '00600645022', '55984998555', 'fulano.souza@gmail.com', 'Rua Tiradentes 524, São Paulo - SP', ''),
(2, 'Ciclano Silveira', '1999-04-02', '00600857342', '55984998666', 'ciclano_silveira12@hotmail.com', 'Rua São João 423, São Paulo - SP', ''),
(4, 'Ana Paula Silva', '1990-06-15', '12345678900', '55999887766', 'anapaula.silva@gmail.com', 'Rua dos Girassóis, 123, Jardim das Flores, São Pau', ''),
(5, 'Carlos Eduardo Souza', '1985-03-22', '98765432100', '55998877665', 'cesouza@hotmail.com', 'Avenida dos Pinheiros, 456, Pinheiros, São Paulo -', ''),
(6, 'Rafaela dos Santos', '1995-12-10', '13579246800', '55991234567', 'rafaela.santos@gmail.com', 'Rua da Praia, 789, Centro, Florianópolis - SC', ''),
(7, 'José da Silva', '1980-01-25', '32165498700', '55987654321', 'josesilva@gmail.com', 'Rua das Flores, 567, Centro, São Paulo - SP', 'cliente está com dívidas a pagar'),
(8, 'Fernanda Oliveira', '1993-09-05', '14785236900', '55994567890', 'fernanda.oliveira@hotmail.com', 'Avenida das Acácias, 789, Jardim das Flores, Campi', ''),
(9, 'Gustavo Almeida', '1988-07-15', '36925814700', '55985555888', 'gustavo.almeida@gmail.com', 'Rua dos Pinheiros, 123, Pinheiros, São Paulo - SP', 'ex-funcionário'),
(10, 'Luciana Rodrigues', '1991-04-12', '25836914700', '55999988889', 'luciana.rodrigues@hotmail.com', 'Rua das Palmeiras, 345, Jardim América, Belo Horiz', ''),
(11, 'Mariano Martins', '1979-11-23', '00603645054', '55986662432', 'mariano.martins@gmail.com', 'Avenida das Águias, 456, Jardim das Águias, Brasíl', 'cliente em potencial'),
(12, 'Juliana Mendes', '1985-03-29', '14785236901', '55995678456', 'juliana.mendes@yahoo.com', 'Rua das Orquídeas, 789, Jardim das Flores, São Pau', 'Recebe as encomendas na Rua São João, 467.\r\nEndereço apenas para contato');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
