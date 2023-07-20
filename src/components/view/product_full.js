import { Button } from '@mui/material'
import React from 'react'

export default function product_full({ obj }) {

	// !! only props must be here, no hooks
	const { img, title, price, text, _id: productId } = obj.fullPost
	const { pullPush } = obj

	return (
		<>
			<div className="postFull__left">
				<img src={img} />
			</div>
			<div className="postFull__right">
				<div className="title tac">{title}</div>
				<div className="brand tac">${price}</div>
				<hr></hr>
				<div className="tac">{text}</div>
				<Button
					className="mt"
					onClick={() => (window.location.href = "/cart", pullPush({ col: "user", field: "cart", item: productId, action: "push", dups: true }))}
					variant="contained"
				>
					add to cart
				</Button>
			</div>
		</>
	)
}
