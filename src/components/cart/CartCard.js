import React from "react"
import CloseIcon from "@mui/icons-material/Close";
import "./index.scss"

export default function CartCard({ obj }) {

	const { img, title, price } = obj

	return (
		<section className="f jcsb aic m0a cartCard">
			<img src={img} />
			<div className="fc">
				<div>{title}</div>
				<div className="brand">${price}</div>
			</div>
			{/* // TODO quntity */}
			<div>#2</div>
			{/* // TODO total price */}
			<div>${price * 2}</div>
			<CloseIcon />
		</section>
	)
}
