export default function clearForm(formClassName) {
	const form = document.querySelector(`.${formClassName}`)
	form.querySelectorAll("input, textarea").forEach(input => {
		// !! don't erase email
		if (input.name === "email") return
		input.value = ""
	})
}