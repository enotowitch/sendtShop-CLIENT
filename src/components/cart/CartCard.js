import React from "react"
import "./index.scss"
import DigitalDownload from "../digitalDownload/DigitalDownload";
import HasDigitalDownload from "../digitalDownload/HasDigitalDownload";
import CartCardImg from "./CartCardImg";
import CartCardPrice from "./CartCardPrice";
import CartCardCustomFields from "./CartCardCustomFields";
import CartCardDelete from "./CartCardDelete";

export default function CartCard({ obj, totalPrice, className }) {

	const { img, title, price, _id: productId, quantity, archive, status } = obj

	return (
		<section className={`f jcsb aic m0a mb cartCard animation cardAnim ${className ? className : ""} ${status === "hidden" ? "dangerBg" : ""} ${status === "deleted" ? "dangerBg2" : ""}`}>

			{status === "hidden" && <div className="w100 mb">* this product was marked as suspended</div>}
			{status === "deleted" && <div className="w100 mb">* this product was marked as deleted</div>}

			<CartCardImg obj={obj} />

			{/* section 1 */}
			<div className="fc w60 oh sec1">
				<div className="title2 wsn toe cartCard__title">{title}</div>
				<CartCardCustomFields obj={obj} />
				<div><span className="fw500">Quantity:</span> {quantity}</div>
			</div>

			{/* section 2 */}
			<div className="fc sec2">
				<CartCardDelete obj={obj} className="asfe mb40" />
				<CartCardPrice obj={obj} totalPrice={totalPrice} className="asfe fw600" />
				<div className="brand">${price}+ each</div>
			</div>

			<div className="w100">
				<DigitalDownload download={archive} />
				<HasDigitalDownload download={archive} />
			</div>
		</section>
	)
}
