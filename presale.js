function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    // Добавляем слушатель событий для иконки гамбургера
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
});

