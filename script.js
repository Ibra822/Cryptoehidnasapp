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
    // Переключаем класс active для управления видимостью меню
    navbar.classList.toggle("active");
}

// Установка слушателя событий при загрузке документа
document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем изначальное скрытое состояние меню
    var navbar = document.getElementById("navbar");
    navbar.style.left = "-100%"; // Изначально скрываем меню

    // Добавляем слушатель для иконки меню
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

    // Дополнительно проверяем, не активно ли меню (например, при перезагрузке страницы),
    // и устанавливаем корректное начальное состояние
    if (navbar.classList.contains("active")) {
        navbar.style.left = "0"; // Если меню должно быть открыто
    }
});
