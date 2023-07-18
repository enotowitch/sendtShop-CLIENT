import React from "react"
import Product_article_card from "./product_article_card"
import addToCart from "../../img/addToCart.svg"

export default function product_card({ obj }) {

	// !! only props must be here, no hooks
	const { price } = obj

	return (
		<>
			<Product_article_card obj={obj} >

				{/* product & article cards are 70% same; product_card diff here */}
				<div className="f jcsb aife card__bottom">
					<div>${price}</div>
					<img src={addToCart} />
				</div>
				
			</Product_article_card>
		</>
	)
}
