import React, { useEffect } from "react"
import { useState } from "react"
import Input from "./Input"
import { Button } from "@mui/material"

export default function InputsCustomSelectOptions({ editValue }) {

	const [options, optionsSet] = useState([""])

	useEffect(() => {
		editValue && optionsSet(editValue || [""]) // set inputs length in edit mode
	}, [editValue])

	function inputs() {
		return options?.map((option, ind) => { // gen inputs on "add" click
			return (
				<div className="f fwn g aic">
					<Input required editValue={option.name} name={`option_name${ind}`} placeholder={`option name ${ind + 1}`} label={`option name ${ind + 1}`} className="w50 mb" variant="outlined" size="small" />
					<Input required editValue={option.price} name={`option_price${ind}`} placeholder={`option price ${ind + 1}`} label={`option price ${ind + 1}`} className="w50 mb" variant="outlined" size="small" type="number" />
					<Button onClick={() => delInput(ind)} className="mb p0" variant="outlined" size="small" style={{ minWidth: 22 }}>X</Button>
				</div>
			)
		})
	}

	function addInput() {
		optionsSet(prev => [...prev, ""])
	}

	function delInput(ind) {
		optionsSet(prev => prev.filter((input, inputInd) => inputInd !== ind))
	}

	return (
		<div className="fcc">
			{inputs()}
			<div className="fcc w100">
				<Button onClick={addInput} variant="outlined" size="small">add option</Button>
			</div>
		</div>
	)
}
