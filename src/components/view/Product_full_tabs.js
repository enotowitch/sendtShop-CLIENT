import React from 'react'
import Tabs from '../tabs/Tabs'
import FAQ from '../FAQ/FAQ'
import AddReview from '../product/AddReview'

export default function Product_full_tabs({ characteristics, informations, productId }) {

	const tabsNamesArr = []
	const tabsValuesArr = []

	// ! characteristic
	if (characteristics?.length > 0) { // characteristics provided => render tab name & value
		tabsNamesArr.push("Characteristics")
		tabsValuesArr.push(characteristics?.map(({ name, value }, ind) => <div className="f fwn p"><div className="fw600 w100 pr">{name}</div><div className="w100 tac">{value}</div></div>))
	}
	// ! information: FAQ
	if (informations?.length > 0) { // informations provided => render tab name & value
		tabsNamesArr.push("Information")
		tabsValuesArr.push(informations?.map(({ name, value }, ind) => <FAQ title={name} text={value} />))
	}
	// ! reviews
	tabsNamesArr.push("Reviews") // render tab "Reviews" anyway
	tabsValuesArr.push(<AddReview _id={productId} />)

	return (
		<Tabs arr={tabsNamesArr} className="py">
			{tabsValuesArr}
		</Tabs>
	)
}
