import React from "react"
import { CarouselBanner } from "../carousel/CarouselBanner"

export default function Banner() {

	const myHeight = "450px"

	return (
		<CarouselBanner cols={1} autoplay={3000} width="100%">
			<><img width="100%" style={{ height: myHeight, objectFit: "cover" }} src="https://www.theoutnet.com/ycm/resource/blob/1308266/87d6ae193760860ecd4c0080fc803b17/pre-hp-main-2-menswear-image-sale-data.jpg" /></>
			<><img width="100%" style={{ height: myHeight, objectFit: "cover" }} src="https://www.russellandbromley.co.uk/file/general/SS23_SALE_60_Homepage_Hero_White_Womens.jpg" /></>
			<><img width="100%" style={{ height: myHeight, objectFit: "cover" }} src="https://oallery.com/cdn/shop/files/230703_OALLERY_Content_SS23_Sale_Website-Banner_Website_Banner.jpg?crop=center&height=1080&v=1688724511&width=1920" /></>
		</CarouselBanner>
	)
}
