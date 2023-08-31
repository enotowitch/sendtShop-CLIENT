import React from "react"
import Draggable from "./Draggable"
import PostCards from "../post/PostCards"

export default function YouMayLike({ type, className }) {
	return (
		<div className={`mb ${className ? className : ""}`}>
			<div className="title tac">You may also like</div>
			<Draggable>
				<div className="scrollableArea">
					<PostCards type={type} status="random" className="f fwn" />
				</div>
			</Draggable>
		</div>
	)
}
