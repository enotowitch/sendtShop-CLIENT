import React from "react"
import useCartCard from "./useCartCard";
import { Close } from "@mui/icons-material";

export default function CartCardDelete({ obj }) {

	const { deleteCartProduct } = useCartCard(obj)

	return (
		<Close onClick={(e) => deleteCartProduct(e)} />
	)
}
