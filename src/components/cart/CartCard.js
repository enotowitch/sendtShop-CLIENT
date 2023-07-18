import React from "react"
import CloseIcon from "@mui/icons-material/Close";
import "./index.scss"
import CartCounter from "./CartCounter";

export default function CartCard({ obj, quantity, totalPrice }) {

	const { img, title, price, _id } = obj

	return (
		<section className="f jcsb aic m0a mb cartCard">
			<img src={img} />
			<div className="fc">
				<div>{title}</div>
				<div className="brand">${price}</div>
			</div>

			<CartCounter quantity={quantity} _id={_id} />

			<div>${totalPrice}</div>
			<CloseIcon />
		</section>
	)
}
