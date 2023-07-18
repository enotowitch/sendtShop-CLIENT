import React from "react"
import "./index.scss"
import usePost from "../../hooks/usePost";
import VariableComponent from "./VariableComponent";

export default function PostCard({ obj }) { // top=logic; bottom=view

	// logic
	const { deletePost } = usePost()
	const { type, _id } = obj // type=product/article/...
	const _obj = { ...obj, deletePost } // props + functions

	return (
		// view
		<div className="wS card" onClick={() => window.location.href = `/${type}/${_id}`}>
			{/* load product_card/article_card/... */}
			<VariableComponent type={type} action="card" obj={_obj} />
		</div>
	)
}
