import React from "react"
import "./index.scss"

export default function SelectNative(props) {

	const { className, arr, editValue, placeholder, defaultValue, value } = props

	// set outer (eg: Context) value, and get outer value via props
	function onChange(e) {
		props.onChange && props.onChange(e)
	}

	return (
		<select
			value={value || editValue}
			onChange={onChange}
			className={className}
			{...props}
		>
			{placeholder && <option hidden>{placeholder}</option>}
			{defaultValue && <option value="" selected>{defaultValue}</option>}
			{arr.map(({ value, text }) => <option key={value} value={value}>{text}</option>)}
		</select>
	)
}