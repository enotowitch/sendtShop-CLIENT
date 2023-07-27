import React from 'react'
import liked from "../../img/liked.svg"
import { Clear, Edit } from "@mui/icons-material";
import Tags from '../tags/Tags';

export default function product_article_card({ obj, children }) {

	// !! only props must be here, no hooks
	// * gray cause of eval
	const { img, title, type, _id, deletePost, tags } = obj

	return (
		<div>
			{/* top */}
			<div className="f jcsb aic card__top" onClick={(e) => e.stopPropagation()}>
				<img src={liked} className="ml010" />
				{/* eg: /edit/product|article|smth/_id */}
				<Edit style={{ height: 33 }} onClick={() => window.location.href = `/edit/${type}/${_id}`} />
				<Clear onClick={(e) => deletePost(e, type, _id)} className="mr010" />
			</div>
			{/* center */}
			<img src={img} />
			<Tags arr={tags} className="scrollableTags" />
			<div className="title tac">{title}</div>
			{/* bottom */}
			{children}
		</div>
	)
}
