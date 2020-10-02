// Задание 2
// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

/* Первая проверка, дробные части: 12345, 12300 */
let a = 13.123456789;
let b = 2.123;
let n = 5;

/* Первая проверка, дробные части: 89, 89 */
// let a = 13.890123;
// let b = 2.891564;
// let n = 2;

/* Первая проверка, дробные части: 890, 891 */
// let a = 13.890123;
// let b = 2.891564;
// let n = 3;

let firstFractNormalized = Math.floor(a % 1 * Math.pow(10, n));
let secondFractNormalized = Math.floor(b % 1 * Math.pow(10, n));


console.log('дробная часть a больше дробной части b:', firstFractNormalized > secondFractNormalized);
console.log('дробная часть a меньше дробной части b:', firstFractNormalized < secondFractNormalized);
console.log('дробная часть a больше или равна дробной части b:', firstFractNormalized <= secondFractNormalized);
console.log('дробная часть a меньше или равна дробной части b:', firstFractNormalized >= secondFractNormalized);
console.log('дробная часть a равна дробной части b:', firstFractNormalized === secondFractNormalized);
console.log('дробная часть a не равна дробной части b:', firstFractNormalized !== secondFractNormalized);

