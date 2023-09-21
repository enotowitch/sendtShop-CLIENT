import React from 'react'
import Tags from '../tags/Tags';
import Product_article_card_top from "./product_article_card_top"
import Product_article_card_img from './Product_article_card_img';

export default function Product_article_card({ obj, children }) {

	const { img, title, tags, textEditorValue } = obj

	return (
		<div className="wS tdn card animation cardAnim">
			{/* top */}
			<Product_article_card_top obj={obj} />
			{/* center */}
			<Product_article_card_img obj={obj} />
			<Tags arr={tags} className="scrollableArea hideScrollbar" />
			<div className="title tac card__title">{title}</div>
			{/* bottom */}
			{children}
		</div>
	)
}
