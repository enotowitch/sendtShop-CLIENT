import React, { useState } from "react"
import "./index.scss"
import { useContext } from "react"
import { Context } from "../../Context"

export default function Select(props) {

	const { className, options, editValue, placeholder, defaultValue } = props
	const [value, valueSet] = useState()

	const { filterPostsQuerySet, skipSet } = useContext(Context)

	function onChange(e) {
		valueSet(e.target.value) // set state
		filterPostsQuerySet(prev => ({ ...prev, sort: e.target.value })) // set sort value to Context
		skipSet(0) // null skip to sort from the start of the product list
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
			{options.map(({ value, text }) => <option key={value} value={value}>{text}</option>)}
		</select>
	)
}