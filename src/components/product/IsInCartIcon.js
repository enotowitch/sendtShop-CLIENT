import React from "react"
import { ShoppingCart } from "@mui/icons-material"
import { BRAND_COLOR } from "../../consts"
import useIsInCartIcon from "./useIsInCartIcon"
import CardLink from "../view/CardLink"

export default function IsInCartIcon({ obj }) {

	const { isInCart } = obj
	const { goToCart } = useIsInCartIcon()

	return (
		isInCart
			?
			<ShoppingCart
				style={{ width: 25, height: 25, fill: BRAND_COLOR }}
				onClick={goToCart}
			/>
			:
			<CardLink obj={obj}>
				<div className="brand fw600">shop ></div>
			</CardLink>
	)
}
