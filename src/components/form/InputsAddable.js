import React, { useEffect, useState } from "react"
import "./index.scss"
import Input from "./Input"
import { Button } from "@mui/material"

// eg: editValue=[{name:"a", value:"1"}...]
// type=characteristic/information
export default function InputsAddable({ title, type, editValue }) {

	const [inputArr, inputArrSet] = useState([])

	useEffect(() => { // edit mode
		inputArrSet(editValue || [])
	}, [editValue])

	function inputs() {
		return inputArr?.map(({ name, value }, ind) => { // gen inputs on "add" click
			return (
				<React.Fragment key={name}>
					<div className="f fwn g3 mt">
						<Input multiline name={`${type}Name${ind + 1}`} placeholder={`name of ${type} ${ind + 1}`} label={`name of ${type} ${ind + 1}`} editValue={name} />
						<Input multiline name={`${type}Value${ind + 1}`} placeholder={`value of ${type} ${ind + 1}`} label={`value of ${type} ${ind + 1}`} editValue={value} />
						<Button onClick={() => delInput(ind)} variant="outlined" className="removeBtn">remove</Button>
					</div>
				</React.Fragment>
			)
		})
	}

	function addInput() {
		inputArrSet(prev => [...prev, ""])
	}

	function delInput(ind) {
		inputArrSet(prev => prev.filter((input, inputInd) => inputInd !== ind))
	}

	return (
		<>
			<div className="title2 tac">{title}</div>
			{inputs()}
			<Button onClick={addInput} className="mb" variant="outlined">add {type}</Button>
		</>
	)
}
