import React from "react"
import usePost from "../../hooks/usePost"
import useFullPost from "../../hooks/useFullPost"
import useAddOrEdit from "../../hooks/useAddOrEdit"
import VariableComponent from "./VariableComponent"

export default function AddPost({ type }) { // type=product/article/...

	// * gray cause of eval
	const { addPost, editPost } = usePost()
	const { fullPost } = useFullPost(type) // to get all info about post for editPost, NOT to actual display the full post
	const { varText, varFn } = useAddOrEdit(type) // variable text/function dep. on post type

	const obj = { addPost, editPost, fullPost, varText, varFn } // props needed by VariableComponent: product_add/article_add/comment_add...

	return (
		<section className="wM m0a">
			{/* load product_add/article_add/comment_add/... */}
			<VariableComponent type={type} action="add" obj={obj} />
		</section>
	)
}
