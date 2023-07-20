import React from "react"
import usePost from "../../hooks/usePost"
import usePostFull from "../../hooks/usePostFull"
import useAddOrEdit from "../../hooks/useAddOrEdit"
import VariableComponent from "./VariableComponent"

export default function PostAdd({ type }) { // type=product/article/...

	// * gray cause of eval
	const { addPost, editPost } = usePost() // PostAdd is for both: addPost & editPost
	const { fullPost } = usePostFull(type) // to get all info about post for editPost, NOT to actual display the full post
	const { varText, varFn } = useAddOrEdit(type) // variable text/function dep. on post type

	const obj = { addPost, editPost, fullPost, varText, varFn } // props needed by VariableComponent: product_add/article_add/comment_add...

	return (
		<section className="wM m0a">
			{/* load product_add/article_add/comment_add/... */}
			<VariableComponent type={type} action="add" obj={obj} />
		</section>
	)
}
