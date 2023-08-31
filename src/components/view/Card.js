import React from "react"

export default function Card({ children, obj }) {

	const { type, _id } = obj // type=product/article/...

	return (
		<div className="wS card animation" onClick={() => window.location.href = `/${type}/${_id}`}>
			{children}
		</div>
	)
}
