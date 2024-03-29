// Получаем элементы
var copyButton = document.getElementById("copyButton");
var modal = document.getElementById("modal");
var closeButton = document.querySelector(".close-btn");

// Функция для открытия модального окна
function openModal() {
  modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = "none";
}

// Слушатель событий для кнопки копирования
copyButton.addEventListener("click", function() {
  navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh')
  .then(() => {
    openModal(); // Открыть модальное окно
    setTimeout(closeModal, 2000); // Автоматически закрыть через 2 секунды
  })
  .catch(err => {
    console.error('Error in copying text: ', err);
  });
});

// Слушатель событий для кнопки закрытия
closeButton.addEventListener("click", closeModal);

// Слушатель событий для клика за пределами модального окна
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});

// Функция для переключения видимости меню
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    // Обновленный слушатель событий для объединенного элемента иконки и текста меню
    document.querySelector('.menu-trigger').addEventListener('click', toggleMenu);
});
