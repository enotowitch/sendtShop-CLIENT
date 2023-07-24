import React from "react"
import Tag from "./Tag"
import "./index.scss"

export default function Tags({ arr, className }) {

	typeof arr === 'string' && (arr = arr.split(','))

	return (
		<div className={className} onClick={(e) => e.stopPropagation()}>
			{arr?.map((tag, ind) => {
				return (
					<Tag key={ind} tag={tag} />
				)
			})}
		</div>
	)
}