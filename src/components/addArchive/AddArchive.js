import React, { useContext, useState } from "react"
import { Context } from "../../Context"
import { useEffect } from "react"

export default function AddArchive({ editValue }) {

	useEffect(() => { // edit mode: show uploadedName
		uploadedNameSet(editValue)
	}, [editValue])

	const [uploadedName, uploadedNameSet] = useState(editValue)
	const { uploadedArchiveSet } = useContext(Context)

	function onChange(e) {
		uploadedNameSet(e.target.files[0]?.name)
		// * only saves uploadedArchive to Context, archive upload happens in useAddArhive
		uploadedArchiveSet(e.target.files[0]) // save archive to Context
	}

	return (
		<div className="bd brL p mb">
			<label>
				<input name="archive" type="file" className="hiddenInput" onChange={onChange} />
				{!uploadedName && <div>add "digital download"</div>}
				{uploadedName && <div>{uploadedName}</div>}
			</label>
		</div>
	)
}

// test