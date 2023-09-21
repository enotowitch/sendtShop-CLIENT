import React from "react"
import { CarouselBanner } from "../carousel/CarouselBanner"
import bannerList from "./bannerList"
import BannerImg from "./BannerImg"

export default function Banner() {
	return (
		<CarouselBanner cols={1} autoplay={3000} width="100%">
			{bannerList?.map(({ link, src, src2 }) => (
				<BannerImg key={src} link={link} src={src} src2={src2} />
			))}
		</CarouselBanner>
	)
}
