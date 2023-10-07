// Получение ссылок на элементы по их классам
const whatsappIcon = document.querySelector('.whatsapp-icon');
const whatsappPopup = document.querySelector('.whatsapp-popup');
const whatsappClose = document.getElementById('whatsapp-close');
const whatsappMessage = document.getElementById('whatsapp-message');
const whatsappSend = document.getElementById('whatsapp-send');
const successMessage = document.getElementById('success-message'); // Новый элемент сообщения об успешной отправке

// Флаг для отслеживания состояния формы
let isFormOpen = false;

// Добавление обработчиков событий
whatsappIcon.addEventListener('click', function() {
    if (!isFormOpen) {
        whatsappPopup.style.display = 'block';
    } else {
        whatsappPopup.style.display = 'none';
    }
    
    // Инвертируем состояние формы
    isFormOpen = !isFormOpen;
});

whatsappClose.addEventListener('click', function() {
    whatsappPopup.style.display = 'none';
    // Устанавливаем состояние формы в "закрыто"
    isFormOpen = false;
});

whatsappSend.addEventListener('click', function(event) {
    event.preventDefault();
    const messageText = whatsappMessage.value;
    
    // Отправляем данные на сервер PHP
    fetch('sendMessage.php', {
        method: 'POST',
        body: new URLSearchParams({ message: messageText }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Выводим сообщение об успешной отправке или ошибке
        whatsappMessage.value = ''; // Очищаем поле ввода
        whatsappPopup.style.display = 'none'; // Закрываем форму
        // Устанавливаем состояние формы в "закрыто"
        isFormOpen = false;

        // Показываем сообщение об успешной отправке на 2 секунды
        successMessage.style.display = 'block';
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 2000);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });
});

