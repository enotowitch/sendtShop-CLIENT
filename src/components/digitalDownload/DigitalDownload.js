import React from "react"

// download=archive
export default function DigitalDownload({ download }) {
	return (
		download?.length > 0 &&
		(window.location.pathname.includes("/user/order") ||
			window.location.pathname.includes("/admin/order")) &&
		<a className="w100 brand fw600 mt" onClick={() => window.location.href = download}>Download</a>
	)
}
