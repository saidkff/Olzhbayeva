<?php
// Параметры подключения к базе данных MySQL
$servername = "localhost"; // Имя сервера MySQL
$username = "root"; // Имя пользователя MySQL
$password = "root"; // Пароль пользователя MySQL
$database = "clients"; // Имя базы данных MySQL

// Создаем подключение к базе данных
$conn = new mysqli($servername, $username, $password, $database);

// Проверяем успешность подключения
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

// Получаем данные из POST-запроса
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST['message'];

    // Вставляем данные в базу данных
    $sql = "INSERT INTO clients.messages (message_text) VALUES ('$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Сообщение успешно отправлено";
    } else {
        echo "Ошибка при отправке сообщения: " . $conn->error;
    }
}

// Закрываем соединение с базой данных
$conn->close();
?>
