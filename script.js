// Эта функция отображает модальное окно
function showModal() {
    var modal = document.getElementById('copyModal');
    modal.classList.add('show'); // Это добавляет класс .show, который устанавливает display: block и начинает анимацию
}

// Эта функция скрывает модальное окно
function hideModal() {
    var modal = document.getElementById('copyModal');
    modal.classList.remove('show'); // Это удаляет класс .show, возвращая display: none и завершая анимацию
}

// Функция для обработки копирования
document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh')
    .then(() => {
        showModal(); // Показать модальное окно
        setTimeout(hideModal, 2000); // Автоматически скрыть модальное окно через 2 секунды
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
});

// Закрытие модального окна при клике на (x)
document.querySelector('.close').addEventListener('click', hideModal);

// Закрытие модального окна при клике вне его области
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
