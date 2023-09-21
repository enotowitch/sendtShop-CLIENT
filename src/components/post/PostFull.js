import React from "react"
import "./index.scss"
import usePostFull from "../../hooks/usePostFull"
import usePullPush from "../../hooks/usePullPush"
import usePost from "../../hooks/usePost"
import { useParams } from "react-router-dom"
import useAddToCart from "../product/useAddToCart"
import PostsOther from "../other/PostsOther"
import Product_full from "../view/Product_full"
import Article_full from "../view/Article_full"
import Spinner from "../other/Spinner"

export default function PostFull({ type }) { // type=product/article/...

	const { id } = useParams() // !! don't refactor: to work in card & fullPost => need to pass id via args
	const { fullPost, loading } = usePostFull(type, id) // full product/full article/...

	const { pullPush } = usePullPush()
	const { hidePost } = usePost()
	const { addToCart } = useAddToCart(fullPost)
	const obj = { fullPost, pullPush, hidePost, addToCart }

	return (
		<>
			<Spinner loading={loading}>
				<div className="fcc g6 m0a mb postFull">
					{
						type === "product"
							?
							<Product_full obj={{ ...obj }} />
							:
							<Article_full obj={{ ...obj }} />
					}
				</div>
			</Spinner>
			<PostsOther type={type} className="mt4" />
		</>
	)
}
