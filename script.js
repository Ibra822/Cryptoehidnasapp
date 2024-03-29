// Функция для отображения модального окна
function showModal() {
  var modal = document.getElementById('copyModal');
  modal.style.display = "block";
  modal.style.opacity = "1";
}

// Функция для скрытия модального окна
function hideModal() {
  var modal = document.getElementById('copyModal');
  modal.style.opacity = "0";
  setTimeout(function() {
    modal.style.display = "none";
  }, 2000); // Скроет модальное окно после завершения анимации угасания
}

// Функция для обработки копирования адреса
document.getElementById('copyButton').addEventListener('click', function() {
  navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh')
  .then(() => {
    showModal(); // Показываем модальное окно
    setTimeout(hideModal, 2000); // Автоматически скрываем его через 2 секунды
  })
  .catch(err => {
    console.error('Error in copying text: ', err);
  });
});

// Обработка клика на элементе с классом .close (крестик для закрытия модального окна)
document.querySelector('.close').addEventListener('click', hideModal);

// Обработка клика вне модального окна для его скрытия
window.onclick = function(event) {
  var modal = document.getElementById('copyModal');
  if (event.target == modal) {
    hideModal();
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
