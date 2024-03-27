document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh').then(() => {
        alert('Address copied!');
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
});

// Функция для переключения меню
function toggleMenu() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.width === "100%" || navbar.style.width === "15%") {
        navbar.style.width = "0"; // Скрыть меню
    } else {
        // Открыть меню
        // Установить ширину в зависимости от размера экрана
        if (window.innerWidth <= 768) {
            navbar.style.width = "100%"; // Полная ширина для мобильных устройств
        } else {
            navbar.style.width = "15%"; // 15% ширина для десктопов
        }
    }
}

// Добавляем слушатель для иконки меню
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
});


