// Функция для отображения модального окна
function showModal() {
    var modal = document.getElementById('copyModal');
    modal.classList.add('display-flex'); // Добавляем класс для flex display
}
// Функция для скрытия модального окна
function hideModal() {
    var modal = document.getElementById('copyModal');
    modal.classList.remove('display-flex'); // Удаляем класс для flex display
    modal.style.display = "none"; // Скрываем модальное окно
}
// Обработчик клика для копирования адреса и отображения модального окна
document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh')
    .then(() => {
        showModal();
        setTimeout(hideModal, 2000); // Автоматическое скрытие модального окна через 2 секунды
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
});
// Обработчик клика для закрытия модального окна при клике на кнопку (x)
document.querySelector('.close').addEventListener('click', hideModal);

// Обработчик клика для закрытия модального окна при клике вне его области
window.addEventListener('click', function(event) {
    var modal = document.getElementById('copyModal');
    if (event.target === modal) {
        hideModal();
    }
});

// Функция для переключения видимости меню
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    // Обновленный слушатель событий для объединенного элемента иконки и текста меню
    document.querySelector('.menu-trigger').addEventListener('click', toggleMenu);
});
