<?php
// Подключение к базе данных
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "clients_repository";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получение данных из POST-запроса
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $phone = $_POST["Phone_Number"];
    $message = $_POST["Message"];
    
    // SQL-запрос для вставки данных в таблицу
    $sql = "INSERT INTO clients_repository.clients (name, email, phone, message)
            VALUES ('$name', '$email', '$phone', '$message')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Данные успешно добавлены в базу данных.";
    } else {
        echo "Ошибка: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
}
?>
