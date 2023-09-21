import React from "react"
import { Edit } from "@mui/icons-material";
import LikeIcon from "../icons/LikeIcon";
import ForAdmin from "../other/ForAdmin";
import Share from "../share/Share";
import Product_article_card_top_hide from "./Product_article_card_top_hide";
import Product_article_card_top_delete from "./Product_article_card_top_delete";

// TODO rename to PostIcons
export default function Product_article_card_top({ obj, children }) { // type=product/article

	const { type, _id } = obj

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
				<ForAdmin>
					<Edit onClick={() => window.location.href = `/edit/${type}/${_id}`} />
					<Product_article_card_top_hide obj={obj} />
					<Product_article_card_top_delete obj={obj} />
				</ForAdmin>
				<Share obj={obj} />
			</div>
		</>
	)
}
