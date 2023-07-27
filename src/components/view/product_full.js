import { Button } from '@mui/material'
import React from 'react'
import { CART_ROUTE } from '../../consts'

export default function product_full({ obj }) {

	// !! only props must be here, no hooks
	const { img, title, price, text, _id: productId, brand } = obj.fullPost
	const { pullPush } = obj

	return (
		<>
			<div className="postFull__left">
				<img src={img} />
			</div>
			<div className="postFull__right">
				<div className="title tac">{title}</div>
				<div className="brand tac">${price}</div>
				<div className="gray tac mt2">{brand}</div>
				<div className="tac">stars here</div>
				<div className="gray tac">123 customer reviews</div>
				<Button
					className="mt2"
					onClick={() => (window.location.href = CART_ROUTE, pullPush({ col: "user", field: "cart", item: productId, action: "push", dups: true }))}
					variant="contained"
				>
					add to cart
				</Button>
				<hr className="my2"></hr>
				<div className="tac">{text}</div>
			</div>
		</>
	)
}
