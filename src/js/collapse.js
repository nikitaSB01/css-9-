document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".collapse-button");
  const content = document.querySelector(".collapsible-content");

  button.addEventListener("click", function () {
    if (content.style.maxHeight) {
      // Скрыть содержимое
      content.style.opacity = "0";
      content.style.maxHeight = null;
      requestAnimationFrame(() => {
        // Убираем отступы после плавного закрытия
        setTimeout(() => {
          content.style.padding = "0";
        }, 300);
      });
    } else {
      // Показать содержимое
      content.style.padding = "10px"; // Устанавливаем отступы
      content.style.maxHeight = content.scrollHeight + "px"; // Устанавливаем максимальную высоту
      content.style.opacity = "1";
    }
  });

  // Обработчик события для закрытия окна при клике вне него
  document.addEventListener("click", function (event) {
    // Проверяем, произошел ли клик вне кнопки и содержимого
    if (!button.contains(event.target) && !content.contains(event.target)) {
      // Скрыть содержимое, если оно открыто
      if (content.style.maxHeight) {
        content.style.opacity = "0";
        content.style.maxHeight = null;
        requestAnimationFrame(() => {
          // Убираем отступы после плавного закрытия
          setTimeout(() => {
            content.style.padding = "0";
          }, 300);
        });
      }
    }
  });
});
