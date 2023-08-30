import React from "react"
import Product_article_card_top from "./product_article_card_top"
import Tags from "../tags/Tags"
import Product_full_form from "./Product_full_form"
import RatingCount from "../product/RatingCount"
import CarouselProduct from "../carousel/CarouselProduct"
import { useState } from "react"
import HasDigitalDownload from "../digitalDownload/HasDigitalDownload"
import Product_full_tabs from "./Product_full_tabs"

export default function Product_full({ obj }) {

	let img, title, price, text, productId, brand, tags, archive, characteristicNames, characteristicValues, informationNames, informationValues
	if (obj.fullPost) { // prevent "can not destructure"
		({ img, title, price, text, _id: productId, brand, tags, archive, characteristicNames, characteristicValues, informationNames, informationValues } = obj.fullPost)
	}

	const { addToCart, deletePost } = obj
	const [varPrice, varPriceSet] = useState(price)

	return (
		<>
			{/* left */}
			<div className="postFull__left">
				<Product_article_card_top obj={{ ...obj.fullPost, deletePost }} />
				{img && <CarouselProduct arr={img} />}
				{characteristicNames && <Product_full_tabs obj={{ characteristicNames, characteristicValues, informationNames, informationValues }} productId={productId} />}
			</div>
			{/* right */}
			<div className="postFull__right">
				<div className="title tac">{title}</div>
				<div className="brand tac fullProductTotalPrice">${varPrice}</div>
				<div className="gray tac mt mb">{brand}</div>
				<RatingCount _id={productId} showCount={true} />
				<HasDigitalDownload download={archive} className="fcc" />
				<Product_full_form addToCart={addToCart} {...obj.fullPost} />
				{/* "bottom" */}
				<hr className="mt2 mb"></hr>
				<Tags arr={tags} className="tac" label="Tags" />
				<div className="tac">{text}</div>
			</div>
		</>
	)
}
