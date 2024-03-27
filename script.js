document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh').then(() => {
        alert('Address copied!');
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
});

// Функция для переключения меню
function toggleMenu() {
    var navbar = document.querySelector('nav');
    if (navbar.style.width === "100%" || navbar.style.width === "10%") {
        navbar.style.width = "0"; // Скрыть меню
    } else {
        // Открыть меню
        // Установить ширину в зависимости от размера экрана
        if (window.innerWidth <= 768) {
            navbar.style.width = "100%"; // Полная ширина для мобильных устройств
        } else {
            navbar.style.width = "10%"; // Частичная ширина для десктопов
        }
    }
}

// Добавляем слушатель для иконки меню
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
