import React from "react"
import Category from "./Category"
import catList from "./catList"
import { CarouselBanner } from "../carousel/CarouselBanner"

export default function Categories() {
	return (
		<div className="fcc g mb2">
			<CarouselBanner cols={3}>
				{catList?.map(({ src, title }) => <Category key={src} src={src} title={title} />)}
			</CarouselBanner>
		</div>
	)
}
