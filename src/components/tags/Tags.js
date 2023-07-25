import React from "react"
import Tag from "./Tag"
import "./index.scss"
import Draggable from "../other/Draggable"

export default function Tags({ arr, className }) {

	typeof arr === 'string' && (arr = arr.split(','))

	return (
		<Draggable>
			<div className={className} onClick={(e) => e.stopPropagation()}>
				{arr?.map((tag, ind) => {
					return (
						<Tag key={ind} tag={tag} />
					)
				})}
			</div>
		</Draggable>
	)
}