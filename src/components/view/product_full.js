import { Button } from "@mui/material"
import React from "react"
import { CART_ROUTE } from "../../consts"
import Product_article_card_top from "./product_article_card_top"
import Tags from "../tags/Tags"
import Tabs from "../tabs/Tabs"
import FAQ from "../FAQ/FAQ"
import Product_full_form from "./Product_full_form"
import AddReview from "../product/AddReview"
import RatingCount from "../product/RatingCount"
import CarouselProduct from "../carousel/CarouselProduct"

export default function product_full({ obj }) {

	// !! only props must be here, no hooks
	let img, title, price, text, productId, brand, tags, sizes, colors
	if (obj.fullPost) { // prevent "can not destructure"
		({ img, title, price, text, _id: productId, brand, tags, sizes, colors } = obj.fullPost)
	}
	const { addToCart, deletePost } = obj

	return (
		<>
			<div className="postFull__left">
				<Product_article_card_top obj={{ ...obj.fullPost, deletePost }} />

				<CarouselProduct arr={img} />

				<Tabs arr={["Characteristics", "Information", "Reviews"]} className="py">
					<>
						{/* Characteristics */}
						{obj?.fullPost?.characteristicNames?.map((name, ind) => <div className="f fwn p"><div className="fw600 w100 pr">{name}</div><div className="w100 tac">{obj?.fullPost?.characteristicValues[ind]}</div></div>)}
					</>
					<>
						{/* Information */}
						{obj?.fullPost?.informationNames?.map((name, ind) => <FAQ title={name} text={obj?.fullPost?.informationValues[ind]} />)}
					</>
					<>
						{/* Reviews */}
						<AddReview _id={productId} />
					</>
				</Tabs>

			</div>
			<div className="postFull__right">
				<div className="title tac">{title}</div>
				<div className="brand tac">${price}</div>
				<div className="gray tac mt mb">{brand}</div>
				<RatingCount _id={productId} showCount={true} />

				<Product_full_form addToCart={addToCart} {...obj.fullPost} />

				<hr className="mt2 mb"></hr>
				<Tags arr={tags} className="tac" label="Tags" />
				<div className="tac">{text}</div>
			</div>
		</>
	)
}
