import React, { useState } from "react"
import { Skeleton } from "@mui/material";
import parseTextEditorImg from "../textEditor/parseTextEditorImg"

export default function Product_article_card_img({ img, textEditorValue }) {

	// img
	const textEditorImg = parseTextEditorImg(textEditorValue)
	const _img = textEditorImg || img?.[0] // in article_card rewrites DB img to textEditorImg
	// isImgLoaded
	const [isImgLoaded, isImgLoadedSet] = useState(false)

	return (
		<>
			{isImgLoaded ? <img src={_img} /> : <Skeleton variant="rectangular" height={224} width={330} />}
			{/* using hidden img to define whether it's loaded */}
			<img src={_img} onLoad={() => isImgLoadedSet(true)} style={{ display: "none" }} />
		</>
	)
}
