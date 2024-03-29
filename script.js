document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh').then(() => {
        // Отображаем модальное окно
        var modal = document.getElementById('copyModal');
        modal.style.display = "block";

        // Скрываем модальное окно через 2 секунды
        setTimeout(function(){
            modal.style.display = "none";
        }, 2000);
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
});

// Закрытие модального окна при клике на (x)
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    var modal = document.getElementById('copyModal');
    modal.style.display = "none";
}

// Закрытие модального окна при клике за его пределами
window.onclick = function(event) {
    var modal = document.getElementById('copyModal');
    if (event.target === modal) {
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
