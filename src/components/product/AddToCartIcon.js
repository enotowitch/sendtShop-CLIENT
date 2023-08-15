import React from "react"
import { ShoppingCartOutlined, ShoppingCart } from "@mui/icons-material"
import { BRAND_COLOR } from "../../consts"
import useAddToCartIcon from "./useAddToCartIcon"

export default function AddToCartIcon({ isInCart, _id: productId }) {

	const { onOff, addToCart } = useAddToCartIcon(productId, isInCart)

	return (
		<div className={`${onOff || isInCart ? "addToCart" : "addToCart brandBg"}`} onClick={addToCart}>
			{onOff || isInCart
				?
				<ShoppingCart style={{ width: 25, height: 25, fill: BRAND_COLOR }} />
				:
				<ShoppingCartOutlined style={{ width: 25, height: 25, fill: "white" }} />
			}
		</div>
	)
}
