// Задание 2
// С помощью цикла создать перевёрнутый вариант произвольной строки. Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП».

let str = 'Привет, мир!'
// let str = '1';
// let str = ' ';

let strReversed = '';

for (let i = 0; i < str.length; i += 1) {
	strReversed = `${str[i]}${strReversed}`;
}

console.log(strReversed)
