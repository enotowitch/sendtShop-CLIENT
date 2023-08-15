import React from "react"
import cleanTimestamp from "../../utils/cleanTimestamp"
import Tags from "../tags/Tags"
import Markdown from "../textEditor/Markdown"
import { Visibility } from "@mui/icons-material";
import Product_article_card_top from "./product_article_card_top"

export default function article_full({ obj }) {

	// !! only props must be here, no hooks
	const { title, _id: articleId, createdAt, tags, textEditorValue, views, type } = obj.fullPost
	const { deletePost } = obj

	return (
		<div className="fc aic">

			<Product_article_card_top obj={{ ...obj.fullPost, deletePost }}>
				<div className="f aic"><Visibility />{views}</div>
			</Product_article_card_top>

			<div className="title tac">{title}</div>
			{/* // TODO min read */}
			<div className="gray mb">{cleanTimestamp(createdAt, false)} | 1 min read</div>
			<Tags arr={tags} />
			<Markdown>{textEditorValue}</Markdown>
		</div>
	)
}
