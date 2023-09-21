import React from "react"
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import useLikeIcon from "./useLikeIcon";
import { BRAND_COLOR, LIKED_PRODS_ROUTE } from "../../consts";
import useNoUser from "../../hooks/useNoUser";
import useSnackbar from "../../hooks/useSnackbar";

// type=product/article/... 
// _id=productId/articleId/...
export default function LikeIcon({ obj }) { // obj=product/article/...

	const { type } = obj
	const { likeDislike, isProductLiked, articleLikesCount } = useLikeIcon(obj)
	const { noUserRedirect } = useNoUser()
	const { showSnackbar } = useSnackbar()

	function onClick() {
		noUserRedirect()
		likeDislike()
		if (type === "product") {
			const action = isProductLiked ? "removed from " : "added to "
			showSnackbar({ text: action, linkText: "liked", link: LIKED_PRODS_ROUTE })
		}
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
