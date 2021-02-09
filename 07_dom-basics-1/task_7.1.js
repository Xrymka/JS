// Задание
// Создайте HTML-страницу с полем для ввода числа, кнопкой и div-элементом с числом 0. В поле для ввода должно вводиться число с количеством секунд, а кнопка должна запускать таймер. При запуске таймера число в div-элементе должно замениться на введённое в поле. Затем каждую секунду оно должно уменьшаться на единицу до тех пор, пока не дойдёт до 0. При этом таймер должен корректно работать, если во время его работы пользователь запускает его заново.

document.addEventListener('DOMContentLoaded', function () {
  let number = document.querySelector('.number');
  let btn = document.querySelector('.timer__btn');
  let timer = document.querySelector('.timer');
  let intervalId;

  function startInterval () {
    if (number.value > 0) {
      clearInterval(intervalId);
      timer.textContent = number.value;
      intervalId = setInterval(currentCount, 1000);
    } else alert('Wrong value!');
  };

  btn.addEventListener('click', startInterval);

  function currentCount () {
    if (timer.textContent > 0) {
      timer.textContent = timer.textContent - 1;
    } else clearInterval(intervalId);
  }
})
