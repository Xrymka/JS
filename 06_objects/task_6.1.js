// Задание 1
// Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов.




let objects = [
{ name: 'Василий', surname: 'Васильев' },
{ name: 'Иван', surname: 'Иванов' },
{ name: 'Пётр', surname: 'Петров' }
]

function arrayFilterByProperty(list, property, value) {
	for (let i in list) {
	  let newArray = [];
	  if (list[property] == list[i] && list[value] == list[i]) {
		result.push(newArray);
	  }
	}
	return result;
  }


let result = arrayFilterByProperty(objects, 'name', 'Иван');


  console.log(result, objects);
// export default {checkedList};
