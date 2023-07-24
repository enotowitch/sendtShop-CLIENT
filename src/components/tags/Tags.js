import React from "react"
import Tag from "./Tag"

export default function Tags({ arr }) {

	typeof arr === 'string' && (arr = arr.split(','))

	return (
		<div>
			{arr?.map((tag, ind) => {
				return (
					<Tag key={ind} tag={tag} />
				)
			})}
		</div>
	)
}