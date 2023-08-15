export default function parseForm(e) { // e=event from onSubmit (html form)

	let form = {} // {"any field 1": "@","any field 2": "123","any field 3": "abc"}
	let tags = [] // gather mui TagsInput (Autocomplete) hidden inputs after Chip
	let sizes = [] // gather mui TagsInput (Autocomplete) hidden inputs after Chip
	let colors = [] // gather mui TagsInput (Autocomplete) hidden inputs after Chip
	let characteristicNames = [] // gather product_add characteristic names
	let characteristicValues = [] // gather product_add characteristic values
	let informationNames = [] // gather product_add info names
	let informationValues = [] // gather product_add info values
	let textEditorValue

	// put all `inputs` values to "form"
	e.target.querySelectorAll("input, select, textarea").forEach(each => {

		// !! gather textEditorValue if present (article_add)
		textEditorValue = document.querySelector(".CodeMirror")?.innerText

		// !! each.name != ""
		if (each.name) {
			// !! gather mui TagsInput (Autocomplete) hidden inputs after Chip
			if (each.name.includes("tags")) { tags = [...tags, each.value] }
			if (each.name.includes("sizes")) { sizes = [...sizes, each.value] }
			if (each.name.includes("colors")) { colors = [...colors, each.value] }
			if (each.name.includes("characteristicName")) { characteristicNames = [...characteristicNames, each.value] }
			if (each.name.includes("characteristicValue")) { characteristicValues = [...characteristicValues, each.value] }
			if (each.name.includes("informationName")) { informationNames = [...informationNames, each.value] }
			if (each.name.includes("informationValue")) { informationValues = [...informationValues, each.value] }

			form = { ...form, tags, sizes, colors, characteristicNames, characteristicValues, informationNames, informationValues, textEditorValue, [each.name]: each.checked || each.value }
		}
	})

	return (
		{ form }
	)
}