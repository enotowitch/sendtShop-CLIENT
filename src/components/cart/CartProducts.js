import { Button } from "@mui/material"
import React from "react"

// for both user cart prods & order prods
export default function CartProducts({ cartProducts, allProductsTotalPrice, link }) {
	return (
		<div className="f g4 wL m0a">
			<div className="wM w100">
				{cartProducts}
			</div>
			<section className="tac mb wS w100">
				<div>Subtotal: ${allProductsTotalPrice}</div>
				<Button
					variant="contained"
					href={link}
				>
					PLACE ORDER
				</Button>
			</section>
		</div>
	)
}
