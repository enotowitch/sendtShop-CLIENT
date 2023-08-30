export default function timeRead(value) {
	return Math.ceil(value?.split(" ").length / 200) + " min read"
}