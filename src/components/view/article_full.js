import React from "react"
import cleanTimestamp from "../../utils/cleanTimestamp"
import Tags from "../tags/Tags"
import Markdown from "../textEditor/Markdown"
import { Visibility, Favorite, Share } from "@mui/icons-material";

export default function article_full({ obj }) {

	// !! only props must be here, no hooks
	const { title, _id: articleId, createdAt, tags, textEditorValue, views } = obj.fullPost
	const { pullPush } = obj

	return (
		<div className="fc aic">
			<div className="f jcsb w100">
				<div className="f aic"><Visibility />{views}</div>
				<div className="f g">
					<div className="f aic"><Favorite className="brand" />123</div>
					<Share />
				</div>
			</div>
			<div className="title tac">{title}</div>
			{/* // TODO min read */}
			<div className="gray mb">{cleanTimestamp(createdAt, false)} | 1 min read</div>
			<Tags arr={tags} />
			<Markdown>{textEditorValue}</Markdown>
		</div>
	)
}
