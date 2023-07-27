// * finds img url in TextEditor markup
export default function parseImg(value) {
	{/* TODO: can grab link, not img, if link is before img */ }
	return value?.match(/((https|http).+)(?:\))/)?.[1] // * match http(s) .+ ...)
}