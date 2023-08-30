import React from "react"
import { CloudDownload } from "@mui/icons-material"
import { CART_ROUTE } from "../../consts"

export default function HasDigitalDownload({ download, className }) {
	return (
		(window.location.pathname.includes("/product/") || window.location.pathname === CART_ROUTE) &&
		download?.length > 0 && <div className={`w100 f aic fsi mt ${className ? className : ""}`}><CloudDownload /> * Includes Digital Download</div>
	)
}
