// Задание
// Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.
// В конце файла с кодом домашнего задания напишите конструкцию export default {название функции}, чтобы была возможность автоматической проверки получившейся функции.


function checkedList(firstList, secondList) {
	let elementsNotInSecondList = [];
	for (let i in firstList) {
		if (!secondList.includes(firstList[i])) {
			elementsNotInSecondList.push(firstList[i]);
		}
	};
	return elementsNotInSecondList;
};


emailsList= ['gergrg@ff.ru', 'geergrg@ff.ru', 'kjhkjhh@ff.ru', 'huhiuh@ff.ru', 'ihiu@ff.ru', 'yuhu7@ff.ru', 'kjoij@ff.ru', 'srgsergreg@ger.com'];
emailsBlackList = ['kjoij@ff.ru', 'gergrg@ff.ru', '877n@ff.ru', 'oiio8@ff.ru', '546464@ff.ru', '6564klj@ff.ru', '51oj@ff.ru', 'iouh78@ff.ru', 'kny7@ff.ru'];

console.log(checkedList(emailsList, emailsBlackList));

// export default {checkedList};
