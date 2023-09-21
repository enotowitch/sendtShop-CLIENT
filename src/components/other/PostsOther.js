import React from "react"
import Draggable from "./Draggable"
import PostCards from "../post/PostCards"
import { useContext } from "react"
import { Context } from "../../Context"

export default function PostsOther({ type, className }) {

	const { user } = useContext(Context)

	return (
		<>
			{
				[
					{ title: "You may like", status: "random" },
					{ title: "Recently Viewed", status: "viewed" }
				].map(({ title, status }) => {
					if (!user && status === "viewed") return // hide "viewed" section from visitor
					return (
						<div className={`mb ${className ? className : ""}`}>
							<div className="title tac">{title}</div>
							<Draggable>
								<div className="scrollableArea">
									<PostCards type={type} status={status} className="f fwn jcfs" />
								</div>
							</Draggable>
						</div>
					)
				})
			}
		</>
	)
}
