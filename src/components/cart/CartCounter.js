import React from "react"
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useCartCounter from "./useCartCounter";

export default function CartCounter({ quantity, _id }) {

	const { count, cartCounter } = useCartCounter(quantity, _id)

	return (
		<div className="f aic">
			{count}
			<div className="fc">
				<ExpandLess onClick={() => cartCounter("+")} />
				<ExpandMore onClick={() => cartCounter("-")} />
			</div>
		</div>
	)
}
