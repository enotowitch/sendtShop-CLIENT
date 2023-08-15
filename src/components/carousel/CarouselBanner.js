import React from "react"
import Carousel from "better-react-carousel"

export const CarouselBanner = () => {

	const myHeight = "450px"

	return (
		<Carousel cols={1} rows={1} gap={10} showDots="true" autoplay={3000} loop containerStyle={{ height: myHeight, marginBottom: "30px" }}>
			<Carousel.Item>
				<img width="100%" height={myHeight} style={{ objectFit: "cover" }} src="https://www.theoutnet.com/ycm/resource/blob/1308266/87d6ae193760860ecd4c0080fc803b17/pre-hp-main-2-menswear-image-sale-data.jpg" />
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" height={myHeight} style={{ objectFit: "cover" }} src="https://www.russellandbromley.co.uk/file/general/SS23_SALE_60_Homepage_Hero_White_Womens.jpg" />
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" height={myHeight} style={{ objectFit: "cover" }} src="https://oallery.com/cdn/shop/files/230703_OALLERY_Content_SS23_Sale_Website-Banner_Website_Banner.jpg?crop=center&height=1080&v=1688724511&width=1920" />
			</Carousel.Item>
			{/* ... */}
		</Carousel>
	)
}