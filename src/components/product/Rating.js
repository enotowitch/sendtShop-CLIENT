import React, { useEffect, useState } from "react"
import { Rating } from "react-simple-star-rating"
import { BRAND_COLOR } from "../../consts"
import "./index.scss"

export default function Rating_({ initialValue, iconsCount, disabled = false, size = 40 }) {

	const [value, valueSet] = useState("")

	useEffect(() => {
		initialValue && valueSet(initialValue)
	}, [initialValue])

	return (
		<div className="por">
			<Rating
				onClick={(rate) => valueSet(rate)}
				initialValue={initialValue}
				allowFraction={true}
				fillColor={BRAND_COLOR}
				iconsCount={iconsCount}
				size={size}
				// disable/anable rating
				style={{ pointerEvents: disabled ? "none" : "all" }}
			/>
			{/* if in form gather rating value */}
			<input required className="hiddenInput" name="rating" value={value} />
		</div>
	)
}