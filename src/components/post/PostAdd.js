import React from "react"
import usePost from "../../hooks/usePost"
import usePostFull from "../../hooks/usePostFull"
import useAddOrEdit from "../../hooks/useAddOrEdit"
import { useParams } from "react-router-dom"
import Product_add from "../view/product_add"
import Article_add from "../view/article_add"

export default function PostAdd({ type }) { // type=product/article/...

	const { id } = useParams() // !! don't refactor: to work in card & fullPost => need to pass id via args
	const { fullPost } = usePostFull(type, id) // to get all info about post for editPost, NOT to actual display the full post

	const { addPost, editPost } = usePost() // PostAdd is for both: addPost & editPost
	const { varText, varFn } = useAddOrEdit(type) // variable text/function dep. on post type

	const obj = { addPost, editPost, fullPost, varText, varFn }

	return (
		<section className="wM m0a">
			{type === "product"
				?
				<Product_add obj={obj} />
				:
				<Article_add obj={obj} />
			}
		</section>
	)
}
