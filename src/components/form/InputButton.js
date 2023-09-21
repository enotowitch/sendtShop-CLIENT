import React from "react"
import Input from "../form/Input"
import { Button } from "@mui/material"
import "./index.scss"

export default function InputButton({ editValue, onClick }) {
	return (
		<div className="f fwn w100 inputButton">
			<Input editValue={editValue} variant="outlined" className="inputButton__input" />
			<Button onClick={onClick} variant="contained" className="inputButton__button">copy</Button>
		</div>
	)
}
