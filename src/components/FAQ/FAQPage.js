import React, { useEffect, useState } from "react"
import FAQ from "./FAQ"
import { TextField } from "@mui/material"
import faqContent from "./faqContent"

export default function FAQPage() {

	const [faqs, faqsSet] = useState(faqContent)
	const [value, valueSet] = useState("") // search input value

	useEffect(() => {
		const searched = faqContent?.filter(({ title, text }) => text.includes(value) || title.includes(value))
		faqsSet(searched)
	}, [value])

	return (
		<section className="wM m0a">
			<div className="title tac mb">How can we help?</div>
			<TextField onChange={(e) => valueSet(e.target.value)} placeholder="search FAQ" />
			<div className="mt">
				{faqs?.map(({ title, text }) => <FAQ key={title} title={title} text={text} />)}
			</div>
		</section>
	)
}
