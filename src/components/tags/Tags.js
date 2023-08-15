import React, { useState } from "react"
import Tag from "./Tag"
import "./index.scss"
import Draggable from "../other/Draggable"

// action=filter/...
// formField: if Tags are in form behave as radio; eg: `choose` one of size: s,m,l
// formField=size/color/...
export default function Tags({ arr, className, label, action = "filter", formField, submitBtnClicked }) {

	typeof arr === "string" && (arr = arr.split(",")) // convert string to arr if string passed

	const [formFieldValue, formFieldValueSet] = useState("")
	const [colorTags, colorTagsSet] = useState({ 0: false, 1: false, 2: false, 3: false }) // TODO gen arr dep on length

	function onClick(tagClicked, tagClickedId) {
		formFieldValueSet(tagClicked) // set form input state
		colorTagsSet({ 0: false, 1: false, 2: false, 3: false, [tagClickedId]: true }) // set colored tag state
	}

	return (
		arr?.length > 0 &&
		<div>
			{/* eg:                                  trying to cart product but radio tags (eg: color) are not selected */}
			{label && <div className={`tac fw500 mt ${submitBtnClicked && !formFieldValue && "danger"}`}>{label}</div>}
			<Draggable>
				<div className={className} onClick={(e) => e.stopPropagation()}>
					{arr?.map((tag, ind) => {
						return (
							<Tag key={ind} id={ind} tag={tag} action={action} onClick={onClick} colorTags={colorTags} />
						)
					})}
					{/* hidden input to get `Chip values` in parseForm */}
					{/* eg:									size			  		xl	  */}
					{/* eg:				  					color			 		red	  */}
					{formField && <input hidden required name={formField} value={formFieldValue} />}
				</div>
			</Draggable>
		</div>
	)
}