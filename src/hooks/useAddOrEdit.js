export default function useAddOrEdit(type) { // type=product/article/comment/review...

	// TODO move to post folder
	let varText, varFn
	if (window.location.pathname.includes("add/")) {
		varText = "Add " + type
		varFn = "addPost"
	}
	if (window.location.pathname.includes("edit/")) {
		varText = "Edit " + type
		varFn = "editPost"
	}

	return { varText, varFn }
}