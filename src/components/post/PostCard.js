import React from "react"
import "./index.scss"
import usePost from "../../hooks/usePost";
import VariableView from "../view/VariableView"

export default function PostCard({ obj }) { // top=logic; bottom=view

	// logic
	const { deletePost } = usePost()
	const { type, _id } = obj // type=product/article/...
	const _obj = { ...obj, deletePost } // props + functions

	return (
		// view
		//                                                go to: `/product/id` || `/article/id` || ...
		<div className="wS card animation" onClick={() => window.location.href = `/${type}/${_id}`}>
			{/* load product_card/article_card/... */}
			<VariableView type={type} action="card" obj={_obj} />
		</div>
	)
}
