import React from 'react'
import Tags from '../tags/Tags';
import Product_article_card_top from "./product_article_card_top"

export default function product_article_card({ obj, children }) {

	// !! only props must be here, no hooks
	const { img, title, tags } = obj

	return (
		<div>
			{/* top */}
			<Product_article_card_top obj={obj} />
			{/* center */}
			<img src={img} />
			<Tags arr={tags} className="scrollableTags" />
			<div className="title tac">{title}</div>
			{/* bottom */}
			{children}
		</div>
	)
}
