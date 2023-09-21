import React, { useEffect, useState } from "react"
import useCartProducts from "./useCartProducts"
import ButtonLink from "../form/ButtonLink"
import Spinner from "../other/Spinner"

// for both user cart prods & order prods
export default function CartProducts() {

	const { cartProducts, allProductsTotalPrice, varLink: link, varLink2: link2, varText: text, varBtnText: btnText, varBtnText2: btnText2, varBtnFn } = useCartProducts()
	const loading = cartProducts.length === 0

	// used for: "Your cart is empty"
	const [isTimePassed, isTimePassedSet] = useState(false)
	useEffect(() => {
		setTimeout(() => isTimePassedSet(true), 2000);
	}, [])

	return (
		cartProducts.length > 0
			?
			<div className="fcc g4 wL m0a">
				<div className="wM w100">
					<Spinner loading={loading}>
						{cartProducts}
					</Spinner>
				</div>
				<section className="tac mb wS w100 asfs subTotal">
					<div>Subtotal: ${allProductsTotalPrice.toFixed(2)}</div>
					<div className="my">{text}</div>
					<ButtonLink variant="contained" href={link} onClick={varBtnFn}>{btnText}</ButtonLink>
					{btnText2 && <ButtonLink variant="outlined" className="mt" href={link2}>{btnText2}</ButtonLink>}
				</section>
			</div>
			:
			<>
				{(cartProducts.length === 0 && isTimePassed) && <div className="title tac danger mt4">Your cart is empty</div>}
			</>
	)
}
