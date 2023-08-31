import React from 'react'
import Tabs from '../tabs/Tabs'
import FAQ from '../FAQ/FAQ'
import AddReview from '../product/AddReview'

export default function Product_full_tabs({ obj, productId }) {

	const { characteristicNames, characteristicValues, informationNames, informationValues } = obj

	const tabsNamesArr = []
	const tabsValuesArr = []

	// ! characteristic
	if (characteristicNames.length > 0) { // characteristics provided => render tab name & value
		tabsNamesArr.push("Characteristics")
		tabsValuesArr.push(characteristicNames?.map((name, ind) => <div className="f fwn p"><div className="fw600 w100 pr">{name}</div><div className="w100 tac">{characteristicValues[ind]}</div></div>))
	}
	// ! information: FAQ
	if (informationNames.length > 0) { // informations provided => render tab name & value
		tabsNamesArr.push("Information")
		tabsValuesArr.push(informationNames?.map((name, ind) => <FAQ title={name} text={informationValues[ind]} />))
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
