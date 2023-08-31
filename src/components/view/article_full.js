import React from "react"
import cleanTimestamp from "../../utils/cleanTimestamp"
import Tags from "../tags/Tags"
import Markdown from "../textEditor/Markdown"
import { Visibility } from "@mui/icons-material";
import Product_article_card_top from "./product_article_card_top"
import timeRead from "../../utils/timeRead";

export default function Article_full({ obj }) {

	const { title, _id: articleId, createdAt, tags, textEditorValue, views, type } = obj.fullPost
	const { deletePost } = obj

	return (
		<div className="fc aic">

			<Product_article_card_top obj={{ ...obj.fullPost, deletePost }}>
				<div className="f aic"><Visibility />{views}</div>
			</Product_article_card_top>

			<div className="title tac">{title}</div>
			{/* // TODO min read */}
			<div className="gray mb">{cleanTimestamp(createdAt, false)} | {timeRead(textEditorValue)}</div>
			<Tags arr={tags} />
			<Markdown>{textEditorValue}</Markdown>
		</div>
	)
}
