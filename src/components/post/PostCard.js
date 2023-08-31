import React from "react"
import Product_card from "../view/product_card"
import Article_card from "../view/article_card"
import Skeleton from "../other/Skeleton"

export default function PostCard({ post, loading }) {
	return (
		post?.type === "product"
			?
			<Skeleton loading={loading}>
				<Product_card obj={{ ...post }} />
			</Skeleton>
			:
			<Skeleton loading={loading}>
				<Article_card obj={{ ...post }} />
			</Skeleton>
	)
}
