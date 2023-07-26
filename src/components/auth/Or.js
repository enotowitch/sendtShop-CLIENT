import React from "react"

export default function Or({ text = "OR" }) {
	return (
		<div className="f fwn w100">
			<div className="w100"><hr></hr></div>
			<div className="px">{text}</div>
			<div className="w100"><hr></hr></div>
		</div>
	)
}
