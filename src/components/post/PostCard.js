import React from "react"
import "./index.scss"
import usePost from "../../hooks/usePost";
import VariableView from "../view/VariableView"
import parseTextEditorImg from "../textEditor/parseTextEditorImg"

export default function PostCard({ obj }) {

	const { deletePost } = usePost()
	const { type, _id } = obj // type=product/article/...
	// img
	const textEditorImg = parseTextEditorImg(obj.textEditorValue)
	const img = textEditorImg || obj?.img?.[0] // in article_card rewrites DB img to textEditorImg

	const _obj = { ...obj, deletePost, img } 	// props + functions

	return (
		//                                                go to: `/product/id` || `/article/id` || ...
		<div className="wS card animation" onClick={() => window.location.href = `/${type}/${_id}`}>
			{/* load product_card/article_card/... */}
			<VariableView type={type} action="card" obj={_obj} />
		</div>
	)
}
