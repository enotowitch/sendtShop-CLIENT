import React, { useState } from "react"
import "./index.scss"

// can be used separately and as Tabs part
export default function FAQ({ title, text }) {

	const [on, onSet] = useState(false)

	return (
		title &&
		<div className="FAQ" onClick={() => onSet(prev => !prev)}>
			<div className="FAQ__title">
				{title}
				<span className="FAQ__toggle">{on ? "—" : "+"}</span>
			</div>
			{on && <div className="FAQ__text">{text}</div>}
		</div>
	)
}