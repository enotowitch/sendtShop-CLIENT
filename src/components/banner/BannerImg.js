import React from "react"
import { Link } from "react-router-dom"
import useIsMobile from "../../hooks/useIsMobile"
import scrollToFilter from "../../utils/scrollToFilter"

export default function BannerImg({ link, src, src2 }) {

	const { isMobile } = useIsMobile()

	// get image: local or web
	let srcPcOrMobile = isMobile ? src2 : src // define which img to use: src = PC, src2 = mobile
	!src2 && (srcPcOrMobile = src) // no mobile img provided: use PC img
	const src_ = require(`./img/${srcPcOrMobile}`) // load local img

	// ! style
	const objectFit = isMobile ? "contain" : "cover"
	const height = isMobile ? "auto" : 350

	return (
		<div style={{ height }}>
			<Link to={link}>
				<img src={src_} style={{ width: "100%", height: "100%", objectFit }} onClick={scrollToFilter} />
			</Link>
		</div>
	)
}
