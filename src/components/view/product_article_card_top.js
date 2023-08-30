import React from "react"
import { Clear, Edit } from "@mui/icons-material";
import LikeIcon from "../icons/LikeIcon";
import ForAdmin from "../other/ForAdmin";
import Share from "../share/Share";
import usePost from "../../hooks/usePost"

// TODO rename to PostIcons
export default function Product_article_card_top({ obj, children }) { // type=product/article

	const { type, _id } = obj
	const { deletePost } = usePost()

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
					<Clear style={{ height: 42, width: 42 }} onClick={(e) => deletePost(e, type, _id)} />
				</ForAdmin>
				<Share obj={obj} />
			</div>
		</>
	)
}
