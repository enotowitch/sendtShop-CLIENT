import useSnackbar from "./useSnackbar"

export default function useAnimation() {

	const { showSnackbar } = useSnackbar()

	function deleteAnimation(e, type) {
		if (e.target) {
			e.target.closest(".animation").classList.add("delAnim")
			setTimeout(() => {
				e.target.closest(".animation").style.display = "none"
			}, 500);
		}
		showSnackbar({ text: `${type} deleted` })
	}


	return (
		{ deleteAnimation }
	)
}
