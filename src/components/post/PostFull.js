import React from "react"
import "./index.scss"
import VariableView from "../view/VariableView"
import usePostFull from "../../hooks/usePostFull"
import usePullPush from "../../hooks/usePullPush"
import usePost from "../../hooks/usePost"
import { useParams } from "react-router-dom"
import useAddToCart from "../product/useAddToCart"

export default function PostFull({ type }) { // type=product/article/...

	const { id } = useParams() // !! don't refactor: to work in card & fullPost => need to pass id via args
	const { fullPost } = usePostFull(type, id) // full product/full article/...

	const { pullPush } = usePullPush()
	const { deletePost } = usePost()
	const { addToCart } = useAddToCart()
	const obj = { fullPost, pullPush, deletePost, addToCart }

	return (
		<div className="fcc g6 m0a mb postFull">
			<VariableView type={type} action="full" obj={obj} />
		</div>
	)
}
