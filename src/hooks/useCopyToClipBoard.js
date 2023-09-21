import useSnackbar from "../hooks/useSnackbar"

export default function useCopyToClipBoard() {

	const { showSnackbar } = useSnackbar()

	function copyToClipBoard(e, querySelector) {
		if (!querySelector) {
			navigator.clipboard.writeText(e.target.innerText)
		} else {
			navigator.clipboard.writeText(querySelector)
		}
		showSnackbar({ text: "copied to clipboard" })
	}

	return (
		{ copyToClipBoard }
	)
}

