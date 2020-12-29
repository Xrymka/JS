// Задание 3
// Возьмите выполненное предыдущее задание. Сделайте так, чтобы функция создания выпадающего списка могла обрабатывать не только массив объектов, но и другие виды входящих значений, а именно:
// Массив примитивных значений типа string или number. В таком случае value и label будут равны. Например: [1, 2, 'три', 'четыре', ...]
// Объект с произвольными свойствами и значениями типа string или number. В таком случае каждый элемент должен формироваться из ключа (value) и значения (label) каждого свойства переданного объекта. Например: { value1: 'Значение 1', value2: 'Значение 2', ... }

function convertArray (array) {
	let newArray = []

	let objectType = (typeof(array[0]) === "undefined")

	for (let key in array) {
		if (objectType)
			newArray.push({value: key, label: array[key]})
		else
			newArray.push({value: array[key], label: array[key]})
	}

	for (val in newArray)
		console.log(newArray[val])

	return newArray
}


// export default {checkedList};
