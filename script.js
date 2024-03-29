// Эта функция отображает модальное окно с анимацией
function showModal() {
  var modal = document.getElementById('copyModal');
  modal.classList.add('show');
  modal.classList.remove('hide');
}

// Эта функция скрывает модальное окно с анимацией
function hideModal() {
  var modal = document.getElementById('copyModal');
  modal.classList.add('hide');
  setTimeout(() => {
    modal.classList.remove('show', 'hide');
    modal.style.display = "none"; // Это скроет модальное окно после завершения анимации исчезновения
  }, 300); // Это значение должно соответствовать продолжительности вашей анимации исчезновения
}

// Функция для обработки копирования
document.getElementById('copyButton').addEventListener('click', function() {
  navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh')
    .then(() => {
      showModal();
      setTimeout(hideModal, 2000); // Скрываем модальное окно через 2 секунды
    })
    .catch(err => {
      console.error('Error in copying text: ', err);
    });
});

// Закрытие модального окна при клике на (x)
document.querySelector('.close').addEventListener('click', hideModal);

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
  var modal = document.getElementById('copyModal');
  if (event.target === modal) {
    hideModal();
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
