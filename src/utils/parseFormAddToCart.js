export default function parseFormAddToCart(e) { // e=event from onSubmit (html form)

	let form = {} // {"any field 1": "@","any field 2": "123","any field 3": "abc"}

	const custom_fields = [] // custom_fields = [fieldObj1{name, type,...}, fieldObj2{name, type,...}]
	let fieldObj = {}
	let options = [] // options = [optionObj1{name, price}, optionObj2{name, price}]
	let optionObj = {}

	let custom_field_names = [] // ! for cartCard

	// put all `inputs` values to "form"
	e.target.querySelectorAll("input, select, textarea").forEach(each => {

		if (each.name && each.value) {
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


			form = { ...form, custom_fields, custom_field_names, [each.name]: each.checked || each.value }
		}
	})

	return (
		{ form }
	)
}