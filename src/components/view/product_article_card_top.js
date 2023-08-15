import React from "react"
import { Clear, Edit, Share } from "@mui/icons-material";
import LikeIcon from "../icons/LikeIcon";

// TODO rename to PostIcons
export default function product_article_card_top({ obj, children }) { // type=product/article

	const { type, _id, deletePost } = obj

	return (
		<>
			<div className="f jcsb aic w100 card__top" onClick={(e) => e.stopPropagation()}>

				{/* if there are children place them on the left (margin-right:auto) */}
				{children &&
					<div className="mra">
						{children}
					</div>
				}

				<LikeIcon obj={obj} />
				{/* eg: /edit/product|article|smth/_id */}
				<Edit onClick={() => window.location.href = `/edit/${type}/${_id}`} />
				<Clear style={{ height: 42, width: 42 }} onClick={(e) => deletePost(e, type, _id)} />
				<Share className="mr010" />
			</div>
		</>
	)
}
