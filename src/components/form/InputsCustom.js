import React, { useState } from "react"
import "./index.scss"
import Select from "./Select"
import Input from "./Input"
import InputsCustomSelectOptions from "./InputsCustomSelectOptions"
import { Button } from "@mui/material"

export default function InputsCustom({ obj: fullPost }) {

	const [count, countSet] = useState(fullPost?.custom_field_names?.length || 1)
	const [isTypeSelect, isTypeSelectSet] = useState(fullPost?.custom_field_types && Array.from(fullPost?.custom_field_types, (v, i) => v) || ["text"]) // ["text", "url", "select"] // 1 "text" input on start by default

	function inputs() {
		return Array.from({ length: count }, (v, i) => i).map((item, ind) => { // gen inputs on "add" click

			const _isTypeSelect = (isTypeSelect[ind] === "select" || fullPost?.custom_fields?.[ind]?.type === "select")

			return (
				<div className="bd brL p mt">
					<div className="title3">Custom field {ind + 1}</div>
					<div className="fcc g mt aic">
						<Input editValue={fullPost?.custom_fields?.[ind]?.name} name={`custom_field_name${ind + 1}`} label="field name" className="w50" helperText="eg: color/size/inscription..." variant="outlined" />
						{/* eg:                                                                                                                                                                       get selectedValue from each Select; CHANGE: ["text", "url", "select"] (3rd is "select") TO: ["select", "url", "select"] (1st & 3rd is "select")                                           */}
						<Select editValue={fullPost?.custom_fields?.[ind]?.type} name={`custom_field_type${ind + 1}`} placeholder="type" arr={["text", "number", "url", "select"]} defaultValue="text" selectedValue={(selectedValue) => isTypeSelectSet(prev => prev.map((prevItem, prevInd) => prevInd === ind ? selectedValue : prevItem))} />
						{/* show input "select options" only if type is "select" */}
						{_isTypeSelect && <InputsCustomSelectOptions editValue={fullPost?.custom_fields?.[ind]?.options} />}
						{_isTypeSelect && <Select editValue={fullPost?.custom_fields?.[ind]?.imgSwitch} name={`custom_field_imgSwitch${ind + 1}`} placeholder="this select switches images" arr={["true", "false"]} defaultValue="true" />}
						<Select editValue={fullPost?.custom_fields?.[ind]?.required} name={`custom_field_required${ind + 1}`} placeholder="required" arr={["true", "false"]} defaultValue="true" />
					</div>
				</div>
			)
		})
	}

	function addInput() {
		countSet(prev => prev + 1) // add input
		isTypeSelectSet(prev => [...prev, ""]) // ["text", "url", "select", +emptytype] so isTypeSelect can work
	}

	return (
		<>
			<div className="title2 tac">Custom Fields</div>
			{inputs()}
			<Button onClick={addInput} className="mt mb" variant="outlined">add custom field</Button>
		</>
	)
}
