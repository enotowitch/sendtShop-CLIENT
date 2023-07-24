export default function parseForm(e) { // e=event from onSubmit (html form)

	let form = {} // {"any field 1": "@","any field 2": "123","any field 3": "abc"}
	let tags = [] // gather mui TagsInput (Autocomplete) hidden inputs after Chip

	// put all `inputs` values to "form"
	e.target.querySelectorAll("input, select, textarea").forEach(each => {
		// !! each.name != ""
		if (each.name) {
			// !! gather mui TagsInput (Autocomplete) hidden inputs after Chip
			if (each.name.includes("tag")) {
				tags = [...tags, each.value]
			}
			// !! don't write each tag to form separately, they are in tags: []
			if (!each.name.includes("tag")) {
				form = { ...form, tags, [each.name]: each.checked || each.value }
			}
		}
	})

	return (
		{ form }
	)
}