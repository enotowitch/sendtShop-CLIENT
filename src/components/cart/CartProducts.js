import { Button } from "@mui/material"
import React from "react"

// for both user cart prods & order prods
export default function CartProducts({ cartProducts, allProductsTotalPrice, link, text, btnText }) {
	return (
		<div className="fcc g4 wL m0a">
			<div className="wM w100">
				{cartProducts}
			</div>
			<section className="tac mb wS w100">
				<div>Subtotal: ${allProductsTotalPrice}</div>
				<div className="my">{text}</div>
				<Button variant="contained" href={link}>{btnText}</Button>
			</section>
		</div>
	)
}
