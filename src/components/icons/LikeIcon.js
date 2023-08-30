import React from "react"
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import useLikeIcon from "./useLikeIcon";
import { BRAND_COLOR } from "../../consts";
import useNoUser from "../../hooks/useNoUser";

// type=product/article/... 
// _id=productId/articleId/...
export default function LikeIcon({ obj }) { // obj=product/article/...

	const { type } = obj
	const { likeDislike, isProductLiked, articleLikesCount } = useLikeIcon(obj)
	const { noUserRedirect } = useNoUser()

	function onClick() {
		noUserRedirect()
		likeDislike()
	}

	return (
		// user likes includes productId || article.likes.length > 0 => show like/liked icon
		isProductLiked || articleLikesCount > 0
			?
			<div className="fcc">
				<Favorite className="ml010" onClick={onClick} style={{ fill: BRAND_COLOR }} />
				{type === "article" && articleLikesCount}
			</div>
			:
			<div className="fcc">
				<FavoriteBorder className="ml010" onClick={onClick} />
				{type === "article" && articleLikesCount}
			</div>
	)
}
