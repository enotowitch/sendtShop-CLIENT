import React from "react"
import { Clear } from "@mui/icons-material";
import { useContext } from "react";
import { Context } from "../../Context";
import { DANGER_COLOR } from "../../consts";
import { useLocation } from "react-router-dom";

export default function Product_article_card_top_delete({ obj }) {

	const { type, _id, title } = obj
	const { dialogSet } = useContext(Context)
	const location = useLocation().pathname

	function deletePost(e) {
		dialogSet(prev => ({
			...prev,
			dialogShow: true,
			dialogRightBtnFn: "deletePost",
			dialogRightBtnFnParams: { e, type, _id },
			dialogTitle: `Delete ${type} ${title} FOREVER?`,
			dialogRightBtnText: `delete ${type}`,
			dialogLeftBtnText: "cancel",
			dialogHasButtons: true
		}))
	}

	return (
		location.includes("/hidden/") &&
		<Clear style={{ height: 42, width: 42, fill: DANGER_COLOR }} onClick={deletePost} />
	)
}
