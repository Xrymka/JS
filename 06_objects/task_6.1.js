// Задание 1
// Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов.

let objects = [
	{ name: 'Василий', surname: 'Васильев' },
	{ name: 'Иван', surname: 'Кузов' },
	{ name: 'Иван', surname: 'Иванов' },
	{ name: 'Пётр', surname: 'Петров' }
]

function arrayFilterByProperty(list, property, value) {
	let result = [];

	for (val of list) {
		for (let key in val) {
			if (key === property && val[key] === value) {
				//console.log(val.name + " " + val.surname);
				result.push(val);
			}
		}
	}

	return result;
}

// let result = arrayFilterByProperty(objects, 'name', 'Иван');
// for (val of result) {
//     console.log(val);
// }
// function arrayFilterByProperty(obj) {
//     if (obj.name === 'Иван') {
//         return true;
//     }
//     return false;
//
// let resultFilter = objects.filter(arrayFilterByProperty);



// export default {checkedList};
