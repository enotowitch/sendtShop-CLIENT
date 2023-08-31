import React from "react"
import CartProducts from "./CartProducts"
import CartSteps from "./CartSteps"
import YouMayLike from "../other/YouMayLike"

export default function Cart() {
	return (
		<>
			<>
				<CartSteps step={1} />
				<CartProducts />
			</>
			<YouMayLike type="product" className="mt4" />
		</>
	)
}
