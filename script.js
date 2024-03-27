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
    // Проверяем текущее состояние меню
    if (navbar.style.transform === "translateX(0%)" || navbar.style.transform === "") {
        // Скрываем меню
        navbar.style.transform = "translateX(-100%)";
    } else {
        // Отображаем меню
        navbar.style.transform = "translateX(0%)";
    }
}

// Инициализация слушателя событий
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }

    // Устанавливаем изначальное положение меню вне видимой области экрана
    var navbar = document.getElementById("navbar");
    if (window.innerWidth > 768) {
        // Для десктопных версий отображаем меню, но без выезжающего эффекта
        navbar.style.transform = "translateX(0%)";
    } else {
        // Для мобильных версий изначально скрываем меню
        navbar.style.transform = "translateX(-100%)";
    }
});


