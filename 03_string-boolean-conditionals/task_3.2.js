// Задание 2
// В переменных name, surname написаны имя и фамилия человека. При этом в строках беспорядок с большими и маленькими буквами, и нужно привести строки в порядок. Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы — к нижнему. Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.

// let name = 'Катя'
// let surname = 'кУлиНИч'

// let name = 'кАТя'
// let surname = 'Кулинич'

let name = 'КаТя'
let surname = 'КУлиНИч'

let correctName = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
let correctSurname = surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase();
console.log(correctName, correctSurname)

let compareName = (correctName === name) ? 'Имя осталось без изменений,': 'Имя было преобразовано,';
let compareSurname = correctSurname === surname ? 'фамилия осталась без изменений': 'фамилия была преобразована';

console.log(compareName, compareSurname)
