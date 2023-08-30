import React from "react"
import Carousel from "better-react-carousel"

export const CarouselBanner = ({ children, cols, autoplay = 99999, width }) => {
	return (
		<Carousel cols={cols} rows={1} gap={10} showDots="true" autoplay={autoplay} loop containerStyle={{ marginBottom: "30px", width: width }}>
			{children?.map(child => (
				<Carousel.Item>
					{child}
				</Carousel.Item>
			))}
		</Carousel>
	)
}