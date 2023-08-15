import React from "react"
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import useLikeIcon from "./useLikeIcon";
import { BRAND_COLOR } from "../../consts";

// type=product/article/... 
// _id=productId/articleId/...
export default function LikeIcon({ obj }) { // obj=product/article/...

	const { type, _id } = obj
	const { likeDislike, isProductLiked, articleLikesCount } = useLikeIcon(obj)

	return (
		// user likes includes productId || article.likes.length > 0 => show like/liked icon
		isProductLiked || articleLikesCount > 0
			?
			<div className="fcc">
				<Favorite className="ml010" onClick={likeDislike} style={{ fill: BRAND_COLOR }} />
				{type === "article" && articleLikesCount}
			</div>
			:
			<div className="fcc">
				<FavoriteBorder className="ml010" onClick={likeDislike} />
				{type === "article" && articleLikesCount}
			</div>
	)
}
