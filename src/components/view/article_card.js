import React from "react"
import Product_article_card from "./product_article_card"
import { Visibility } from "@mui/icons-material";

export default function article_card({ obj }) {

	// !! only props must be here, no hooks
	const { views } = obj

	return (
		<Product_article_card obj={obj}>

			{/* product & article cards are 70% same; article_card diff here */}
			<div className="f jcsb aife card__bottom">
				<div className="f aic"><Visibility />{views}</div>
				<div className="brand fw600">read more ></div>
			</div>

		</Product_article_card>
	)
}
