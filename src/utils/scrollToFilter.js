export default function scrollToFilter() {
	setTimeout(() => {
		document.querySelector(".postFilters")?.scrollIntoView(true)
		window.scrollBy(0, -60)
	}, 300);
}