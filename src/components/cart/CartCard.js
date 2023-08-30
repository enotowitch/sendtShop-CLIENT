import React from "react"
import CloseIcon from "@mui/icons-material/Close";
import "./index.scss"
import useCartCard from "./useCartCard";
import copyToClipBoard from "../../utils/copyToClipBoard";
import { useState } from "react";
import { useEffect } from "react";
import DigitalDownload from "../digitalDownload/DigitalDownload";
import HasDigitalDownload from "../digitalDownload/HasDigitalDownload";

export default function CartCard({ obj, totalPrice, className }) {

	const { img, title, price, _id: productId, quantity, archive } = obj
	const { deleteCartProduct } = useCartCard(obj)

	const [additionalPrice, additionalPriceSet] = useState(0) // eg: {color: red, price: 10} = 10

	useEffect(() => {
		// calc additionalPrice
		additionalPriceSet(0) // null additionalPrice
		obj?.custom_field_names?.map(field => {
			// if not obj => return
			if (!obj?.[field]?.includes("{")) return // prevent adding additional price from strings, only objects have it (ProductFullForm: Select gives OBJECT, other Inputs give STRING)
			additionalPriceSet(prev => prev + Number(JSON.parse(obj?.[field]).price))
		})
	}, [obj])

	return (
		<section className={`f jcsb aic m0a mb cartCard animation ${className ? className : ""}`}>
			<img src={img?.[0]} onClick={() => window.location.href = `/product/${productId}`} />
			<div className="fc maw100">
				<div>{title}</div>

				{/* // ! custom_fields; eg: custom text/color/size/... */}
				<div
					className="maw100 oh toe wsn"
				>
					{/* eg: 												custom text || color                                  // !! if obj => parse name                                                 show if product includes additional price*/}
					{obj?.custom_field_names?.map(field => <div><span>{field}</span>: <b onClick={copyToClipBoard}>{obj?.[field]?.includes("{") ? JSON.parse(obj?.[field]).name : obj?.[field]} {obj?.[field]?.includes("{") && "+$" + JSON.parse(obj?.[field]).price}</b></div>)}
				</div>
				{/* // ? custom_fields */}

				<div className="brand">${price}</div>
			</div>

			<div>{quantity}</div>

			<div>${totalPrice + (additionalPrice * quantity)}</div>
			<CloseIcon onClick={(e) => deleteCartProduct(e)} />
			<DigitalDownload download={archive} />
			<HasDigitalDownload download={archive} />
		</section>
	)
}
