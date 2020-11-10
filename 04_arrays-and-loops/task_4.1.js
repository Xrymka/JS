// Задание 1
// Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m. Выведите результат с помощью console.log.

/* Пример 1*/
let n = 0;
let m = 100;
let count = 100;

/* Пример 2*/
// let n = 2;
// let m = 5;
// let count = 50;

/* Пример 3*/
// let n = 100;
// let m = -5;
// let count = 70;

/* Пример 4*/
// let n = -3;
// let m = -10;
// let count = 42;

let dataArray = [];

for (let i = 0; i != count; ++i) {
    let range = Math.abs(m - n);
    let numberInRange = Math.min(n, m) + Math.round(Math.random() * range);
    dataArray.push(numberInRange);
}


console.log(dataArray)
