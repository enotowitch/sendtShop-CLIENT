import React, { useContext } from "react"
import useCartCard from "./useCartCard";
import { Close } from "@mui/icons-material";
import { Context } from "../../Context";
import useSnackbar from "../../hooks/useSnackbar";

export default function CartCardDelete({ obj, className }) {

	const { deleteCartProduct } = useCartCard(obj)
	const { dialogSet } = useContext(Context)
	const { showSnackbar } = useSnackbar()

	function onClick(e) {
		deleteCartProduct(e)
		dialogSet({ dialogShow: false })
		showSnackbar({ text: "product removed from cart" })
	}

	return (
		<Close onClick={onClick} className={className} />
	)
}
