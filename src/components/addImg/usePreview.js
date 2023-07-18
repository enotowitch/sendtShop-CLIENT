import { useEffect, useState } from 'react'

export default function usePreview(editValue) { // editValue=`oldImg`

	const [preview, previewSet] = useState("")

	useEffect(() => {
		previewSet(editValue) // previewSet to oldImg if exist
	}, [editValue])

	function previewMake(file) { // file=e.target.files[0]
		if (file) {
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				previewSet(reader.result);
			});
			reader.readAsDataURL(file);
		}
	}

	return { preview, previewMake }
}
