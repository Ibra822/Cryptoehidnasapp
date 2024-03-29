// Функция для отображения модального окна с анимацией
function showModal() {
    var modal = document.getElementById('copyModal');
    modal.classList.add('show');
    setTimeout(function() { // Устанавливаем таймер на исчезновение модального окна
        modal.classList.remove('show');
    }, 2000); // Модальное окно будет показано на 2 секунды
}

// Обработчик события клика для кнопки копирования
document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh')
    .then(showModal)
    .catch(function(err) {
        console.error('Ошибка при копировании: ', err);
    });
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
