// Задание 2
// Напишите функцию, создающую выпадающий список на веб-странице (HTML select) из массива объектов со значениями. Массив должен содержать объекты со свойствами:
// value — значение для атрибута value тэга option
// label — значение для содержимого тэга option (заголовок элемента при открытии списка или выбранного значения)
// Вторым аргументом функция должна принимать выбранное значение (value выбранного по умолчанию элемента). По умолчанию выбирается 0-й элемент массива значений. Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.
// Возвращаемое значение — DOM-элемент select.
// Создайте базовую html-разметку в файле index.html. В неё поместите получившийся код с помощью <script src="./main.js"></script>. Внутри другого тэга script перед </body> поместите код, который создаст новый select с произвольным массивом значений и поместит его в любое место в body.

function createDropDown (array, chooseValue = array[0].value) {
  let select = document.createElement('select')
//   let foundValue = false

  for (i in array) {
    let option = document.createElement('option')
    option.innerHTML = array[i].label
    select.append(option)

    if (array[i].value == chooseValue) {
      option.selected = true
    //   foundValue = true
    }
  }

//   if (!foundValue) select.firstChild.selected = true

  document.body.append(select)
}

// export default {checkedList};
