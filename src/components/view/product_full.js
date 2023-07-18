import { Button } from '@mui/material'
import React from 'react'

export default function product_full({ obj }) {

	// !! only props must be here, no hooks
	const { img, title, price, _id } = obj.fullPost
	const { addTo } = obj

	return (
		<>
			<div className="postFull__left">
				<img src={img} />
			</div>
			<div className="postFull__right">
				<div className="title tac">{title}</div>
				<div className="brand tac">${price}</div>
				<Button
					onClick={() => (window.location.href = "/cart", addTo("cart", _id))}
					variant="contained"
				>
					add to cart
				</Button>
			</div>
		</>
	)
}
