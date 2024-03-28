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
    if (navbar.style.left === "-100%") {
        navbar.style.left = "0"; // Показать меню
    } else {
        navbar.style.left = "-100%"; // Скрыть меню
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
});
