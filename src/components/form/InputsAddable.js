import React, { useState } from "react"
import add from "../../img/add.svg"
import Input from "./Input"
import "./index.scss"
import Or from "../auth/Or"

// eg: editNames=["name1", "name2", ...]
// eg: editValues=["value1", "value2", ...]
// type=characteristic/information
export default function InputsAddable({ title, type, editNames, editValues }) {

	const [count, countSet] = useState(editNames?.length || 1)

	function inputs() {
		return Array.from({ length: count }, (v, i) => i).map((item, ind) => { // gen inputs on "add" click
			return (
				<div className="f fwn g3 mt">
					<Input multiline name={`${type}Name${ind + 1}`} placeholder={`name of ${type} ${ind + 1}`} editValue={editNames?.[ind]} />
					<Input multiline name={`${type}Value${ind + 1}`} placeholder={`value of ${type} ${ind + 1}`} editValue={editValues?.[ind]} />
				</div>
			)
		})
	}

	function addInput() {
		countSet(prev => prev + 1)
	}

	return (
		<>
			<Or text={title} />
			{inputs()}
			<img src={add} className="icon_add" onClick={addInput} />
		</>
	)
}
