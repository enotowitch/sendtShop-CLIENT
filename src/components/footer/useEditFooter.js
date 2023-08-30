import * as api from "../../api"

// type=about/terms/privacy/returns/...
export default function useEditFooter(type) {

	function editFooter(e) {
		e.preventDefault()
		const textEditorValue = e.target.querySelector(".CodeMirror").innerText
		const res = api.editFooter(type, textEditorValue)
	}

	return (
		{ editFooter }
	)
}
