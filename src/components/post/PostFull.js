import React from "react"
import "./index.scss"
import VariableComponent from "./VariableComponent"
import useFullPost from "../../hooks/useFullPost"
import usePullPush from "../../hooks/usePullPush"

export default function PostFull({ type }) { // type= TODO

	const { fullPost } = useFullPost(type)
	const { pullPush } = usePullPush()
	const obj = { fullPost, pullPush }

	return (
		<div className="f m0a postFull">
			<VariableComponent type={type} action="full" obj={obj} />
		</div>
	)
}
