import React from "react"
import "./index.scss"
import DigitalDownload from "../digitalDownload/DigitalDownload";
import HasDigitalDownload from "../digitalDownload/HasDigitalDownload";
import CartCardImg from "./CartCardImg";
import CartCardPrice from "./CartCardPrice";
import CartCardCustomFields from "./CartCardCustomFields";
import CartCardDelete from "./CartCardDelete";

export default function CartCard({ obj, totalPrice, className }) {

	const { img, title, price, _id: productId, quantity, archive } = obj

	return (
		<section className={`f jcsb aic m0a mb cartCard animation ${className ? className : ""}`}>
			<CartCardImg img={img} productId={productId} />

			<div className="fc maw100">
				<div>{title}</div>
				<CartCardCustomFields obj={obj} />
				<div className="brand">${price}</div>
			</div>

			<div>{quantity}</div>

			<CartCardPrice obj={obj} totalPrice={totalPrice} />

			<CartCardDelete obj={obj} />
			
			<DigitalDownload download={archive} />
			<HasDigitalDownload download={archive} />
		</section>
	)
}
