// Задание 3
// Написать генератор нечётных случайных чисел в диапазоне между n и m включительно. Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m. Вывести результат с помощью console.log.

/* Первый диапазон чисел*/
let n = -7;
let m = -3;

/* Второй диапазон чисел*/
// let n = 2;
// let m = 5;

/* Третий диапазон чисел*/
// let n = 100;
// let m = -5;

/* Четвертый диапазон чисел*/
// let n = -3;
// let m = -10;

let range = Math.abs(m - n);
let numberInRange = Math.min(n, m) + Math.floor(Math.random() * range);
console.log(numberInRange);
odd = 2 * Math.floor(numberInRange / 2) + 1;

console.log('Случайное нечетное число: ', odd)
