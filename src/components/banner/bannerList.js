const product = `${window.location.origin}/product/`
const tag = `${window.location.origin}/products?tag=`

export default [
	// HOW TO USE:
	/* 1. ONLY local files:
		- images must be placed in "./img" ("img" folder in this folder)
		- "src" & "src2": must equal image name + extension
		- "src" = image for desktop: SIZE: 1920 x 350
		- "src2" = image for mobile: SIZE: 768 x 500
		- link: add product id / tag name
	*/
	// ===
	// 1
	{
		// ! here: PRODUCTid is added (650815ff936cf427a4dfe6b8)
		link: product + "650815ff936cf427a4dfe6b8",
		src: "halloween 1.jpg",
		src2: "halloween 1 mobile.jpg",
	},
	// 2
	{
		// ! here: TAG name is added (halloween)
		link: tag + "halloween",
		src: "halloween 2.jpg",
		src2: "halloween 2 mobile.jpg",
	},
	// 3
	{
		link: product + "64fc3d9cd5dcf1d4c8a2eb74",
		src: "t-shirt.jpg",
		src2: "t-shirt mobile.jpg",
	},
]