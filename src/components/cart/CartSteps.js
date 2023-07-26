import React from "react"
import "./index.scss"
import useCartSteps from "./useCartSteps"

export default function CartSteps({ step }) {

	const { varText1, varText2, varText3, showSteps } = useCartSteps()

	return (
		showSteps &&
		<div className="fcc g mb2">
			{/* 1 */}
			<div className="line line__small brandBg"></div>
			<div className="fc aic cartStep">
				<div className="round fcc brandBg white">1</div>
				<div className={`cartStep__text ${step === 1 ? "fw600" : ""}`}>{varText1}</div>
			</div>
			{/* 2 */}
			<div className={`line line__big ${step === 2 || step === 3 ? "brandBg" : ""}`}></div>
			<div className="fc aic cartStep">
				<div className={`round fcc ${step === 2 || step === 3 ? "brandBg white" : ""}`}>2</div>
				<div className={`cartStep__text ${step === 2 ? "fw600" : ""}`}>{varText2}</div>
			</div>
			{/* 3 */}
			<div className={`line line__big ${step === 3 ? "brandBg" : ""}`}></div>
			<div className="fc aic cartStep">
				<div className={`round fcc ${step === 3 ? "brandBg white" : ""}`}>3</div>
				<div className={`cartStep__text ${step === 3 ? "fw600" : ""}`}>{varText3}</div>
			</div>
			<div className={`line line__small ${step === 3 ? "brandBg" : ""}`}></div>
		</div>
	)
}
