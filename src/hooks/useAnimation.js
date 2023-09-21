export default function useAnimation() {

	function deleteAnimation(e) {
		if (e.target) {
			e.target.closest(".animation").classList.add("delAnim")
			setTimeout(() => {
				e.target.closest(".animation").style.display = "none"
			}, 500);
		}
	}

	return (
		{ deleteAnimation }
	)
}
