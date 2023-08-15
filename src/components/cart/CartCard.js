import React from "react"
import CloseIcon from "@mui/icons-material/Close";
import "./index.scss"
import CartCounter from "./CartCounter";
import useCartCard from "./useCartCard";
import copyToClipBoard from "../../utils/copyToClipBoard";

export default function CartCard({ obj, totalPrice, className }) {

	const { img, title, price, _id: productId, size, color, quantity, custom_field } = obj
	const { deleteAllCartProducts } = useCartCard(obj)

	return (
		<section className={`f jcsb aic m0a mb cartCard animation ${className ? className : ""}`}>
			<img src={img} onClick={() => window.location.href = `/product/${productId}`} />
			<div className="fc maw100">
				<div>{title}</div>
				<div>size: <b>{size}</b></div>
				<div>color: <b>{color}</b></div>

				{/* // ! custom_field */}
				<div
					className="maw100 oh toe wsn"
				>
					{/* eg: inscription:   	 									abc */}
					{obj?.custom_field}: <b onClick={copyToClipBoard}>{obj?.[custom_field]}</b>
				</div>
				{/* // ? custom_field */}

				<div className="brand">${price}</div>
			</div>

			<CartCounter quantity={quantity} obj={obj} />

			<div>${totalPrice}</div>
			<CloseIcon onClick={(e) => deleteAllCartProducts(e)} />
		</section>
	)
}
