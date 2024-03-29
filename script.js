document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh')
    .then(() => {
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
        setTimeout(function(){ modal.style.display = "none"; }, 2000);
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
});

// Получаем элемент <span> который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Когда пользователь кликает на <span> (x), закрываем модальное окно
span.onclick = function() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// Когда пользователь кликает в любом месте за пределами модального окна, закрываем его
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
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
