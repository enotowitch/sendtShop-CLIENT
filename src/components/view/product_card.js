import React from "react"
import Product_article_card from "./product_article_card"
import "./index.scss"
import AddToCartIcon from "../product/AddToCartIcon"
import RatingCount from "../product/RatingCount"

export default function product_card({ obj }) {

	// !! only props must be here, no hooks
	const { price, brand, isInCart, _id } = obj

	return (
		<>
			<Product_article_card obj={obj} >

				{/* product & article cards are 70% same; product_card diff here */}
				<div className="gray tac">{brand}</div>
				<RatingCount _id={_id} />
				<div className="f jcsb aife card__bottom">
					<div>${price}</div>
					<AddToCartIcon isInCart={isInCart} _id={_id} />
				</div>

			</Product_article_card>
		</>
	)
}
