import { useContext } from "react"
import { Context } from "../Context"

export default function useClickSliderImg() {

	const { prodFullSelectedImgIndSet } = useContext(Context)

	function clickSliderImg(selectedIndex) {
		document.querySelectorAll(".react-slider__ul")?.[0]?.childNodes?.[selectedIndex]?.click()
		prodFullSelectedImgIndSet(selectedIndex)
	}

	return (
		{ clickSliderImg }
	)
}
