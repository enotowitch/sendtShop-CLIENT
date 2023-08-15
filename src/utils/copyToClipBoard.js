export default function copyToClipBoard(e) {
	navigator.clipboard.writeText(e.target.innerText)
}
