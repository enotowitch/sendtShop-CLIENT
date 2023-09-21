import React from "react"
import useCopyToClipBoard from "../../hooks/useCopyToClipBoard"

// eg: custom text/color/size/...
export default function CartCardCustomFields({ obj }) {

	const { copyToClipBoard } = useCopyToClipBoard()
	const openLink = (link) => window.open(link)

	return (
		<div className="maw100 oh toe wsn">
			{/* eg: 												custom text || color                                  // !! if obj => parse name                                                 show if product includes additional price*/}
			{obj?.custom_field_names?.map(field => {
				const fieldValue = obj?.[field]
				const displayFieldValue = field === "file" ? fieldValue.match(/[^/]+$/) : fieldValue // display short server link to img (if field = file) / or fieldValue
				return (
					<div>
						<span>{field}</span>:&nbsp;
						<b
							onClick={(e) => field === "file" ? openLink(fieldValue) : copyToClipBoard(e)}
							style={{ display: "inline-block", width: 10 }} // prevent very wide card
						>
							{fieldValue?.includes("{") ? JSON.parse(fieldValue).name : displayFieldValue} {fieldValue?.includes("{") && "+$" + JSON.parse(fieldValue).price + " each"}
						</b>
					</div>
				)
			})}
		</div>
	)
}
