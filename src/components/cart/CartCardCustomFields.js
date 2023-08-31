import React from "react"
import copyToClipBoard from "../../utils/copyToClipBoard"

// eg: custom text/color/size/...
export default function CartCardCustomFields({ obj }) {
	return (
		<div className="maw100 oh toe wsn">
			{/* eg: 												custom text || color                                  // !! if obj => parse name                                                 show if product includes additional price*/}
			{obj?.custom_field_names?.map(field => <div><span>{field}</span>: <b onClick={copyToClipBoard}>{obj?.[field]?.includes("{") ? JSON.parse(obj?.[field]).name : obj?.[field]} {obj?.[field]?.includes("{") && "+$" + JSON.parse(obj?.[field]).price}</b></div>)}
		</div>
	)
}
