import React, { useEffect } from "react"
import { useState } from "react"
import Input from "./Input"
import { Button } from "@mui/material"

export default function InputsCustomSelectOptions({ editValue }) {

	const [count, countSet] = useState(1)

	useEffect(() => {
		editValue && countSet(editValue.length - 1) // set inputs length in edit mode
	}, [])

	function inputs() {
		return Array.from({ length: count }, (v, i) => i).map((item, ind) => { // gen inputs on "add" click
			return (
				<div className="f fwn g">
					<Input editValue={editValue?.[ind + 1]?.name} name={`option_name${ind + 1}`} placeholder={`option name ${ind + 1}`} label={`option name ${ind + 1}`} className="w50 mb" variant="outlined" size="small" />
					<Input editValue={editValue?.[ind + 1]?.price} name={`option_price${ind + 1}`} placeholder={`option price ${ind + 1}`} label={`option price ${ind + 1}`} className="w50 mb" variant="outlined" size="small" type="number" />
				</div>
			)
		})
	}

	function addInput() {
		countSet(prev => prev + 1) // add input
	}

	return (
		<div className="fcc">
			{inputs()}
			<div className="fcc w100">
				<Button onClick={addInput} className="mb" variant="outlined" size="small">add option</Button>
			</div>
		</div>
	)
}
