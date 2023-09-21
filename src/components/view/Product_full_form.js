import React, { useState } from "react"
import { Button } from "@mui/material"
import Input from "../form/Input"
import Or from "../auth/Or"
import Select from "../form/Select"
import "./index.scss"
import useClickSliderImg from "../../hooks/useClickSliderImg"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

// to add product to cart: user selects Tags eg: color/size/...
export default function Product_full_form({ addToCart, _id: productId, custom_fields, price, finalVarPriceSet }) {

	// ! varPrices
	const [varPrices, varPricesSet] = useState([]) // [10,30] always rewriten via `SelectId` from `selectedValueAndSelectId`
	function calcVarPrice(selectedValueAndSelectId) { // eg: {value: '{"name":"red","price":"10"}', id: 1}
		const priceSelected = JSON.parse(selectedValueAndSelectId?.value)?.price * 1
		const idSelected = selectedValueAndSelectId?.id
		varPrices[idSelected] = priceSelected // instead of state setter
		const sumPrice = varPrices.reduce((a, b) => a + b, 0)
		const finalVarPrice = Number(price) + sumPrice
		finalVarPriceSet(finalVarPrice.toFixed(2))
	}

	// null additional prices on product id change
	const { id } = useParams()
	useEffect(() => {
		varPricesSet([])
	}, [id])
	// ? varPrices

	const { clickSliderImg } = useClickSliderImg()

	return (
		<>
			<Or text="Customization" className="mt2" />

			<form onSubmit={addToCart} className="fc aic addToCartFullProdForm">
				<input hidden name="_id" value={productId} />

				{/* default select "quantity" */}
				<Select required name="quantity" arr={Array.from({ length: 99 }).map((v, i) => i + 1)} label="quantity" placeholder="quantity" />

				{/* // ! custom_fields */}
				{/* eg: custom_field_names: ["custom text", "color"] */}
				{custom_fields?.map((fieldObj, ind) => (
					fieldObj.name &&
					<>
						{/* input with custom_field name, value is filled by user; Input or Select  */}
						{
							fieldObj.type !== "select"
								?
								<Input name={fieldObj.name} type={fieldObj.type} required={eval(fieldObj.required)} label={fieldObj.name} className="w50 zi0" variant="outlined" size="small" />
								:
								<>
									{/* eg:                                                                                                                          {color: "red", price: "10"}            click Select selected index img in react-slider */}
									<Select id={ind} name={fieldObj.name} required={eval(fieldObj.required)} placeholder={fieldObj.name} arr={fieldObj.options} type="objArr" selectedValueAndSelectId={calcVarPrice} selectedIndex={(selectedIndex) => eval(fieldObj.imgSwitch) && clickSliderImg(selectedIndex)} />
								</>
						}
						{/* input with custom_field value  */}
						<input hidden name={`custom_field_name${ind}`} value={fieldObj.name} />
					</>
				))
				}
				{/* // ? custom_fields */}

				<Button type="submit" className="mt" variant="contained">add to cart</Button>
			</form>
		</>
	)
}
