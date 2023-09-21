import React from "react"
import { Clear } from "@mui/icons-material";
import { useContext } from "react";
import { Context } from "../../Context";
import { useLocation } from "react-router-dom";
import { HIDDEN_ARTICLES, HIDDEN_PRODUCTS } from "../../consts";

export default function Product_article_card_top_hide({ obj }) {

	const { type, _id, title } = obj
	const { dialogSet } = useContext(Context)

	// ! HIDE/UNHIDE
	let varDialogTitle, varDialogFn, varBtnText
	// post is in hidden `post` section => UNHIDE
	const location = useLocation().pathname
	if (location === HIDDEN_ARTICLES || location === HIDDEN_PRODUCTS) {
		varDialogTitle = `Are you sure you want to UNHIDE ${type}: ${title}?`
		varDialogFn = "unHidePost"
		varBtnText = "unhide"
	} else { // post is everywhere but hidden `post` section => HIDE
		varDialogTitle = `Are you sure you want to hide ${type}: ${title}?`
		varDialogFn = "hidePost"
		varBtnText = "hide"
	}
	// ? HIDE/UNHIDE

	function hideUnHide(e) {
		dialogSet(prev => ({
			...prev,
			dialogShow: true,
			dialogRightBtnFn: varDialogFn,
			dialogRightBtnFnParams: { e, type, _id },
			dialogTitle: varDialogTitle,
			dialogRightBtnText: `${varBtnText} ${type}`,
			dialogLeftBtnText: "cancel",
			dialogHasButtons: true
		}))
	}

	return (
		<Clear style={{ height: 42, width: 42 }} onClick={hideUnHide} />
	)
}
