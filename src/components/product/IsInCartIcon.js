import React from "react"
import { ShoppingCart } from "@mui/icons-material"
import { BRAND_COLOR } from "../../consts"
import useIsInCartIcon from "./useIsInCartIcon"

export default function IsInCartIcon({ isInCart }) {

	const { goToCart } = useIsInCartIcon()

	return (
		isInCart
			?
			<ShoppingCart
				style={{ width: 25, height: 25, fill: BRAND_COLOR }}
				onClick={goToCart}
			/>
			:
			<div className="brand fw600">shop ></div>
	)
}
