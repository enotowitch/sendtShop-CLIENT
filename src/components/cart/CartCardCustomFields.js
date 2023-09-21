import React from "react"
import useCopyToClipBoard from "../../hooks/useCopyToClipBoard"

// eg: custom text/color/size/...
export default function CartCardCustomFields({ obj }) {

	const { copyToClipBoard } = useCopyToClipBoard()

	return (
		<div className="maw100 oh toe wsn">
			{/* eg: 												custom text || color                                  // !! if obj => parse name                                                 show if product includes additional price*/}
			{obj?.custom_field_names?.map(field => <div><span>{field}</span>: <b onClick={copyToClipBoard}>{obj?.[field]?.includes("{") ? JSON.parse(obj?.[field]).name : obj?.[field]} {obj?.[field]?.includes("{") && "+$" + JSON.parse(obj?.[field]).price + " each"}</b></div>)}
		</div>
	)
}
