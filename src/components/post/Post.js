import React from "react"
import addToCart from "../../img/addToCart.svg"
import liked from "../../img/liked.svg"
import { Clear, Edit } from "@mui/icons-material";
import "./index.scss"
import usePost from "../../hooks/usePost";

// Post=card
export default function Post({ obj }) { // Post=product/article/...; top=logic; bottom=view

	// logic
	const { img, title, price, type, _id } = obj
	const { deletePost } = usePost()

	return (
		// view
		<div className="wS card" onClick={() => window.location.href = `/${type}/${_id}`}>
			<div className="f jcsb aic card__top" onClick={(e) => e.stopPropagation()}>
				<img src={liked} />
				{/* eg: /edit/product|article|smth/_id */}
				<Edit style={{ height: 33 }} onClick={() => window.location.href = `/edit/${type}/${_id}`} />
				<Clear onClick={(e) => deletePost(e, type, _id)} />
				<div className="brand">SALE</div>
			</div>
			<img src={img} />
			<div className="title tac">{title}</div>
			<div className="f jcsb aife card__bottom">
				<div>${price}</div>
				<img src={addToCart} />
			</div>
		</div>
	)
}
