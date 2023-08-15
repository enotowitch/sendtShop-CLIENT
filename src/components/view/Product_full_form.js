import React, { useState } from "react"
import Tags from "../tags/Tags"
import { Button } from "@mui/material"
import Input from "../form/Input"
import Or from "../auth/Or"

// to add product to cart: user selects Tags eg: color/size/...
export default function Product_full_form({ addToCart, _id: productId, sizes, colors, custom_field }) {

	const [submitBtnClicked, submitBtnClickedSet] = useState(false)

	return (
		<>
			<Or text="Customization" className="mt2" />

			<form onSubmit={addToCart} className="fc aic">
				<input hidden name="_id" value={productId} />

				{custom_field &&
					<>
						{/* input with custom_field name  */}
						<Input name={custom_field} label={custom_field} className="mt2 w50 zi0" variant="outlined" size="small" />
						{/* input with custom_field value  */}
						<input hidden name="custom_field" value={custom_field} />
					</>
				}

				<Tags arr={sizes} className="wfc m0a" label="Sizes" formField="size" action="doNothing" submitBtnClicked={submitBtnClicked} />
				<Tags arr={colors} className="wfc m0a" label="Colors" formField="color" action="doNothing" submitBtnClicked={submitBtnClicked} />
				<Button
					type="submit"
					className="mt2"
					variant="contained"
					onClick={() => submitBtnClickedSet(true)}
				>
					add to cart
				</Button>
			</form>
		</>
	)
}
