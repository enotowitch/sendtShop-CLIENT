import React from "react"
import CloseIcon from "@mui/icons-material/Close";
import "./index.scss"
import CartCounter from "./CartCounter";
import usePullPush from "../../hooks/usePullPush"

export default function CartCard({ obj, quantity, totalPrice }) {

	const { img, title, price, _id: productId } = obj
	const { pullPush } = usePullPush()

	return (
		<section className="f jcsb aic m0a mb cartCard">
			<img src={img} />
			<div className="fc">
				<div>{title}</div>
				<div className="brand">${price}</div>
			</div>

			<CartCounter quantity={quantity} _id={productId} />

			<div>${totalPrice}</div>
			<CloseIcon onClick={(e) => pullPush({ col: "user", field: "cart", item: productId, action: "pull" })} />
		</section>
	)
}
