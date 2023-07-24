import React from "react"
import "./index.scss"
import VariableComponent from "./VariableComponent"
import usePostFull from "../../hooks/usePostFull"
import usePullPush from "../../hooks/usePullPush"

export default function PostFull({ type }) { // type=product/article/...

	const { fullPost } = usePostFull(type) // full product/full article/...
	const { pullPush } = usePullPush()
	const obj = { fullPost, pullPush }

	return (
		<div className="fcc g6 m0a mb postFull">
			<VariableComponent type={type} action="full" obj={obj} />
		</div>
	)
}
