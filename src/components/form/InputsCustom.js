import React, { useEffect, useState } from "react"
import "./index.scss"
import Select from "./Select"
import Input from "./Input"
import InputsCustomSelectOptions from "./InputsCustomSelectOptions"
import { Button } from "@mui/material"

export default function InputsCustom({ obj: fullPost }) {

	// ! set InputsCustom length
	const [customFields, customFieldsSet] = useState([]) // add mode

	useEffect(() => { // edit mode: set InputsCustom length
		customFieldsSet(fullPost?.custom_fields || [])
	}, [fullPost])
	// ? set InputsCustom length

	// ! set isTypeSelect: for each custom_field
	const [isTypeSelect, isTypeSelectSet] = useState(["text"]) // add mode: ["text", "url", "select"] // 1 "text" input on start by default

	const custom_field_types = fullPost?.custom_fields?.map(field => field.type)
	useEffect(() => { // edit mode
		isTypeSelectSet(custom_field_types && Array.from(custom_field_types, (v, i) => v) || ["text"]) // edit mode
	}, [fullPost])
	// ? set isTypeSelect

	function inputs() {
		return customFields?.map((customField, ind) => { // gen inputs on "add" click
			return (
				<React.Fragment key={customField}>
					<div className="bd brL p mt">
						<div className="f fwn">
							<div className="title3 w100">Custom field {ind + 1}</div>
							<Button onClick={() => delInput(ind)} variant="outlined" className="removeBtn">remove</Button>
						</div>
						<div className="fcc g mt aic">
							<Input required editValue={customField.name} name={`custom_field_name${ind + 1}`} label="field name" className="w50" helperText="eg: color/size/inscription..." variant="outlined" />
							{/* eg:                                                                                                                                                                       get selectedValue from each Select; CHANGE: ["text", "url", "select"] (3rd is "select") TO: ["select", "url", "select"] (1st & 3rd is "select")                                           */}
							<Select editValue={customField.type} name={`custom_field_type${ind + 1}`} placeholder="type" arr={["text", "number", "url", "select"]} defaultValue="text" selectedValue={(selectedValue) => isTypeSelectSet(prev => prev.map((prevItem, prevInd) => prevInd === ind ? selectedValue : prevItem))} />
							{/* show input "select options" only if type is "select" */}
							{isTypeSelect[ind] === "select" && <InputsCustomSelectOptions editValue={customField.options} />}
							{isTypeSelect[ind] === "select" && <Select editValue={customField.imgSwitch} name={`custom_field_imgSwitch${ind + 1}`} placeholder="this select switches images" arr={["true", "false"]} defaultValue="true" />}
							<Select editValue={customField.required} name={`custom_field_required${ind + 1}`} placeholder="required" arr={["true", "false"]} defaultValue="true" />
						</div>
					</div>
				</React.Fragment>
			)
		})
	}

	function addInput() {
		customFieldsSet(prev => [...prev, ""])
		isTypeSelectSet(prev => [...prev, ""]) // ["text", "url", "select", +emptytype] so isTypeSelect can work
	}

	function delInput(ind) {
		customFieldsSet(prev => prev.filter((input, inputInd) => inputInd !== ind))
	}

	return (
		<>
			<div className="title2 tac">Custom Fields</div>
			{inputs()}
			<Button onClick={addInput} className="mt mb" variant="outlined">add custom field</Button>
		</>
	)
}
