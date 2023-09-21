import React from "react"
import { Link } from "react-router-dom"

export default function CardLink({ children, obj }) {

	const { type, _id } = obj // type=product/article/...

	return (
		<Link to={`/${type}/${_id}`} className="tdn">
			{children}
		</Link>
	)
}
