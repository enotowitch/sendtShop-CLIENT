import React from "react"

export default function Or({ text = "OR", className }) {
	return (
		<div className={`f fwn aic w100 fw600 wsn ${className}`}>
			<div className="w100"><hr></hr></div>
			<div className="px">{text}</div>
			<div className="w100"><hr></hr></div>
		</div>
	)
}
