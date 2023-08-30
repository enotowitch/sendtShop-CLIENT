export default function parseForm(e) { // e=event from onSubmit (html form)

	let form = {} // {"any field 1": "@","any field 2": "123","any field 3": "abc"}
	let tags = [] // gather mui TagsInput (Autocomplete) hidden inputs after Chip
	let characteristicNames = [] // gather product_add characteristic names
	let characteristicValues = [] // gather product_add characteristic values
	let informationNames = [] // gather product_add info names
	let informationValues = [] // gather product_add info values

	const custom_fields = [] // custom_fields = [fieldObj1{name, type,...}, fieldObj2{name, type,...}]
	let fieldObj = {}
	let options = [] // options = [optionObj1{name, price}, optionObj2{name, price}]
	let optionObj = {}
	let textEditorValue

	let custom_field_names = [] // ! for cartCard

	// put all `inputs` values to "form"
	e.target.querySelectorAll("input, select, textarea").forEach(each => {

		// !! gather textEditorValue if present (article_add)
		textEditorValue = document.querySelector(".CodeMirror")?.innerText

		// !!!
		if (each.name && each.value) {
			if (each.name.includes("tags")) {
				const arrTags = each.value.split(",") // now tags are string
				tags = arrTags
			}
			if (each.name.includes("characteristicName")) { characteristicNames = [...characteristicNames, each.value] }
			if (each.name.includes("characteristicValue")) { characteristicValues = [...characteristicValues, each.value] }
			if (each.name.includes("informationName")) { informationNames = [...informationNames, each.value] }
			if (each.name.includes("informationValue")) { informationValues = [...informationValues, each.value] }

			// ! custom_fields
			for (let i = 1; i < 99; i++) {
				// ! name
				if (each.name.includes(`custom_field_name${i}`)) {
					fieldObj = { ...fieldObj, name: each.value }
				}
				// ? name
				// ! type
				if (each.name.includes(`custom_field_type${i}`)) {
					fieldObj = { ...fieldObj, type: each.value }
				}
				// ? type
				// ! options
				for (let i = 0; i < 99; i++) {
					if (each.name.includes(`option_name${i}`)) { // 1 option name
						optionObj = { ...optionObj, name: each.value }
					}
					if (each.name.includes(`option_price${i}`)) { // 1 option price
						optionObj = { ...optionObj, price: each.value }
						options[i] = optionObj
					}
				}
				fieldObj = { ...fieldObj, options: options }
				// ? options
				// ! imgSwitch
				if (each.name.includes(`custom_field_imgSwitch${i}`)) {
					fieldObj = { ...fieldObj, imgSwitch: each.value }
				}
				// ? imgSwitch
				// ! required
				if (each.name.includes(`custom_field_required${i}`)) {
					fieldObj = { ...fieldObj, required: each.value }
					custom_fields.push(fieldObj)
					options = []
				}
				// ? required
			}
			// ? custom_fields

			// ! for cartCard
			if (each.name.includes("custom_field_name")) { custom_field_names = [...custom_field_names, each.value] }


			form = { ...form, tags, characteristicNames, characteristicValues, informationNames, informationValues, custom_fields, custom_field_names, textEditorValue, [each.name]: each.checked || each.value }
		}
	})

	return (
		{ form }
	)
}