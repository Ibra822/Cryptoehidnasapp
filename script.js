document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh')
    .then(() => {
        // Получаем элемент уведомления
        var copyAlert = document.getElementById('copyAlert');
        // Показываем уведомление
        copyAlert.style.display = 'block';
        // Скрываем уведомление через 2 секунды
        setTimeout(function() {
            copyAlert.style.display = 'none';
        }, 2000);
    }).catch(err => {
        console.error('Error in copying text

// Функция для переключения видимости меню
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    // Обновленный слушатель событий для объединенного элемента иконки и текста меню
    document.querySelector('.menu-trigger').addEventListener('click', toggleMenu);
});
