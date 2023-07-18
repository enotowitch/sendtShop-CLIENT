import React from 'react'
import liked from "../../img/liked.svg"
import { Clear, Edit } from "@mui/icons-material";

export default function product_article_card({ obj, children }) {

	// !! only props must be here, no hooks
	// * gray cause of eval
	const { img, title, price, type, _id, deletePost } = obj

	return (
		<>
			<div className="f jcsb aic card__top" onClick={(e) => e.stopPropagation()}>
				<img src={liked} />
				{/* eg: /edit/product|article|smth/_id */}
				<Edit style={{ height: 33 }} onClick={() => window.location.href = `/edit/${type}/${_id}`} />
				<Clear onClick={(e) => deletePost(e, type, _id)} />
				<div className="brand">SALE</div>
			</div>
			<img src={img} />
			<div className="title tac">{title}</div>
			
			{children}
		</>
	)
}
