export default function clickSliderImg(selectedIndex) {
	document.querySelectorAll(".react-slider__ul")?.[0]?.childNodes?.[selectedIndex]?.click()
}
