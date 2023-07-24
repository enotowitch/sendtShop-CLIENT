import React from "react"
import "./index.scss"

export default function CartSteps({ step }) {
	return (
		<div className="fcc g">
			{/* 1 */}
			<div className="line line__small brandBg"></div>
			<div className="round fcc brandBg white">1</div>
			{/* 2 */}
			<div className={`line line__big ${step === 2 || step === 3 ? "brandBg" : ""}`}></div>
			<div className={`round fcc ${step === 2 || step === 3 ? "brandBg white" : ""}`}>2</div>
			{/* 3 */}
			<div className={`line line__big ${step === 3 ? "brandBg" : ""}`}></div>
			<div className={`round fcc ${step === 3 ? "brandBg white" : ""}`}>3</div>
			<div className={`line line__small ${step === 3 ? "brandBg" : ""}`}></div>
		</div>
	)
}
