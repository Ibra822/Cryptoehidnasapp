// Получение элемента модального окна
var modal = document.getElementById('myModal');
// Получение элемента <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh').then(() => {
        // Отображение модального окна
        modal.style.display = "block";
        // Установка таймера на автоматическое закрытие модального окна через 2 секунды
        setTimeout(function(){ modal.style.display = "none"; }, 2000);
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
});

// Когда пользователь нажимает на <span> (x), закрыть модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь нажимает в любое место за пределами модального окна, закрыть его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Функция для переключения видимости меню
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    // Обновленный слушатель событий для объединенного элемента иконки и текста меню
    document.querySelector('.menu-trigger').addEventListener('click', toggleMenu);
});
