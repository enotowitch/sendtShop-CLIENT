import React from "react"
import Product_article_card from "./product_article_card"
import "./index.scss"
import IsInCartIcon from "../product/IsInCartIcon"
import RatingCount from "../product/RatingCount"

export default function product_card({ obj }) {

	const { price, brand, _id } = obj

	return (
		<Product_article_card obj={obj} >

			{/* product & article cards are 70% same; product_card diff here */}
			<div className="gray tac card__brand">{brand}</div>
			<RatingCount _id={_id} />
			<div className="f jcsb aife card__bottom">
				<div>${price}</div>
				<IsInCartIcon obj={obj} />
			</div>

		</Product_article_card>
	)
}
