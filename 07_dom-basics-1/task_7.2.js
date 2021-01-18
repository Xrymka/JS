// Из JavaScript создайте страницу с полем для ввода и пустым h2-элементом. Введённый в поле текст должен отображаться внутри h2-элемента, но с задержкой в 300 мс. При этом каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный вызов и запускает новый. Таким образом программа должна ожидать завершения ввода пользователя и только после этого изменять текст в h2.

document.addEventListener('DOMContentLoaded', function () {
  let title = document.createElement('h2');
  let input = document.createElement('input');
  let intervalId;

  document.body.append(input);
  document.body.append(title);

  function startUpdating () {
    clearTimeout(intervalId);
    intervalId = setTimeout(updateValue, 300);
  }

  function updateValue () {
    title.textContent = input.value;
  }

  input.addEventListener('input', startUpdating);
});
