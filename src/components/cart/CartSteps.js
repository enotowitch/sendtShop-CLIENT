import React from "react"
import "./index.scss"
import useCartSteps from "./useCartSteps"

export default function CartSteps({ step }) {

	const { varText1, varText2, varText3, showSteps } = useCartSteps()

	return (
		showSteps &&
		<div className="fcc g mb">
			{/* 1 */}
			<div className="line line__small brandBg"></div>
			<div className="fc aic">
				<div className="round fcc brandBg white">1</div>
				<div>{varText1}</div>
			</div>
			{/* 2 */}
			<div className={`line line__big ${step === 2 || step === 3 ? "brandBg" : ""}`}></div>
			<div className="fc aic">
				<div className={`round fcc ${step === 2 || step === 3 ? "brandBg white" : ""}`}>2</div>
				<div>{varText2}</div>
			</div>
			{/* 3 */}
			<div className={`line line__big ${step === 3 ? "brandBg" : ""}`}></div>
			<div className="fc aic">
				<div className={`round fcc ${step === 3 ? "brandBg white" : ""}`}>3</div>
				<div>{varText3}</div>
			</div>
			<div className={`line line__small ${step === 3 ? "brandBg" : ""}`}></div>
		</div>
	)
}
