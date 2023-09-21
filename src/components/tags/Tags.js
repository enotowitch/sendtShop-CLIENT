import React from "react"
import Tag from "./Tag"
import "./index.scss"
import Draggable from "../other/Draggable"
import useTag from "./useTag"

// formField: if Tags are in form behave as radio; eg: `choose` one of size: s,m,l
// formField=size/color/...
export default function Tags({ arr, className, label }) {

	typeof arr === "string" && (arr = arr.split(",")) // convert string to arr if string passed
	const { filter } = useTag()

	return (
		arr?.length > 0 &&
		<div>
			{label && <div className={`tac fw500 mt`}>{label}</div>}
			<Draggable>
				<div className={className} onClick={(e) => e.stopPropagation()}>
					{arr?.map((tag, ind) => {
						return (
							<Tag key={ind} tag={tag} onClick={() => filter(tag)} />
						)
					})}
				</div>
			</Draggable>
		</div>
	)
}