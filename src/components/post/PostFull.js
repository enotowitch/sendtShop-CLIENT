import React from "react"
import "./index.scss"
import VariableComponent from "./VariableComponent"
import useFullPost from "../../hooks/useFullPost"
import useAddTo from "../../hooks/useAddTo"

export default function PostFull({ type }) { // type= TODO

	const { fullPost } = useFullPost(type)
	const { addTo } = useAddTo()
	const obj = { fullPost, addTo }

	return (
		<div className="f m0a postFull">
			<VariableComponent type={type} action="full" obj={obj} />
		</div>
	)
}
