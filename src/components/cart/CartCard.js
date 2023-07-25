import React from "react"
import CloseIcon from "@mui/icons-material/Close";
import "./index.scss"
import CartCounter from "./CartCounter";
import useCartCard from "./useCartCard";

export default function CartCard({ obj, quantity, totalPrice, className }) {

	const { img, title, price, _id: productId } = obj
	const { deleteAllCartProducts } = useCartCard(productId)

	return (
		<section className={`f jcsb aic m0a mb cartCard animation ${className ? className : ""}`}>
			<img src={img} />
			<div className="fc">
				<div>{title}</div>
				<div className="brand">${price}</div>
			</div>

			<CartCounter quantity={quantity} _id={productId} />

			<div>${totalPrice}</div>
			<CloseIcon onClick={(e) => deleteAllCartProducts(e)} />
		</section>
	)
}
