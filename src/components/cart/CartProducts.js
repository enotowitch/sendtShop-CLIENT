import { Button } from "@mui/material"
import React from "react"
import useCartProducts from "./useCartProducts"

// for both user cart prods & order prods
export default function CartProducts() {

	const { cartProducts, allProductsTotalPrice, varLink: link, varLink2: link2, varText: text, varBtnText: btnText, varBtnText2: btnText2, varBtnFn } = useCartProducts()

	return (
		cartProducts.length > 0
			?
			<div className="fcc g4 wL m0a">
				<div className="wM w100">
					{cartProducts}
				</div>
				<section className="tac mb wS w100 asfs subTotal">
					<div>Subtotal: ${allProductsTotalPrice.toFixed(2)}</div>
					<div className="my">{text}</div>
					<Button variant="contained" href={link} onClick={() => varBtnFn()}>{btnText}</Button>
					{btnText2 && <Button variant="outlined" className="mt" href={link2}>{btnText2}</Button>}
				</section>
			</div>
			:
			<div className="title tac danger">Your cart is empty</div>
	)
}
