document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh').then(() => {
        alert('Address copied!');
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
});

// Функция для переключения меню
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    // Переключаем класс 'active', который контролирует отображение меню
    navbar.classList.toggle('active');
}

// Инициализация слушателя событий
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
});
