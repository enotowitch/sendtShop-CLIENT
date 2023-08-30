import SliderImage from "react-zoom-slider"
import "./index.scss"
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context"
import getServerFileName from "../../utils/getServerFileName";
import * as api from "../../api"

export default function CarouselProduct({ arr, obj }) { // obj= `product fullPost`

	const [imgToDeleteInd, imgToDeleteIndSet] = useState("") // get img (clicked "x" near)
	const { uploadedImg } = useContext(Context)

	useEffect(() => {
		// if in product_add/edit
		if (window.location.pathname.includes("/add/") || window.location.pathname.includes("/edit/")) {
			document.querySelector(".react-slider__container").style.display = "none" // hide big imgs preview; leave small
			setTimeout(() => {
				document.querySelector(".react-slider__ul")?.classList.add("smallImgPreviewWrap") // add style to small imgs wrap
				document.querySelectorAll(".react-slider__ul li").forEach((smallImgPreview, ind) => { // add "x" (delete img)
					if (window.location.pathname.includes("/add/")) return // prevent adding "x" in product_add // !!
					if (smallImgPreview.childNodes.length > 1) return // prevent adding many "x"
					let x = document.createElement("span")
					x.innerText = "X"
					x.onclick = () => imgToDeleteIndSet(ind)
					smallImgPreview.append(x)
					// style small previews
					smallImgPreview?.classList?.remove("active")
				})
			}, 1) // loads after some time
		}
		// if clicked "delete img"
		if (imgToDeleteInd !== "") {
			const serverImgPath = arr[imgToDeleteInd]
			// 1. delete img from server
			api.deleteImg(getServerFileName(serverImgPath))
			// 2. delete img from DB product
			const productId = obj?._id
			api.pullPush({ col: "product", colId: productId, field: "img", action: "pull", pullMode: "one", item: serverImgPath })
			window.location.reload() // !!
		}
	}, [uploadedImg, imgToDeleteInd])

	return (
		<SliderImage
			data={arr?.map(img => ({ image: img }))}
			width="100%"
			// showDescription={true}
			direction="right"
		/>
	);
}
