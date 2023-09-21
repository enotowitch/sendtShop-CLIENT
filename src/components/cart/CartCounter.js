import React from "react"
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useCartCounter from "./useCartCounter";

// !! TODO: NOT USED: delete ?
export default function CartCounter({ quantity, obj }) {

	const { count, cartCounter } = useCartCounter(quantity, obj)

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
