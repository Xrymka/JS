function createDropDown (array, chooseValue) {
	let select = document.createElement('select')
	let foundValue = false

	for (i in array) {
		let option = document.createElement('option')
		option.innerHTML = array[i].value
		select.append(option)

		if (array[i].value == chooseValue) {
			option.selected = true
			foundValue = true
		}
	}

	if (!foundValue) select.firstChild.selected = true

	document.body.append(select)
}
