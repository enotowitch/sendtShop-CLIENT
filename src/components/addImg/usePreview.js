import { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context';
import getServerFileName from '../../utils/getServerFileName';

export default function usePreview(editValue) { // editValue=["serverImgPath1", "serverImgPath2", ...]

	const [preview, previewSet] = useState([])
	const { uploadedImgSet } = useContext(Context)

	useEffect(() => { // old images during update: make previews & add to uploadedImg(s)
		editValue?.map(serverImgPath => {
			if (preview.includes(serverImgPath)) return // prevent preview dup imgs
			previewSet(prev => ([...prev, serverImgPath]))

			// convert serverImgPath to file, add files to uploadedImg(s)
			// eg: .../server/upload/imageName1.jpg => uploadedImgSet = [File {name: imageName1.jpg}, File {name: imageName2.jpg}, ...]
			const toDataURL = url => fetch(url)
				.then(response => response.blob())
				.then(blob => {
					const imgName = getServerFileName(serverImgPath)
					var file = new File([blob], imgName) // eg: File {name: imageName1.jpg}
					uploadedImgSet(prev => ([...prev, file]))
				})

			toDataURL(serverImgPath)
		})
	}, [editValue])

	function previewMake(files) { // file=e.target.files[0]
		if (files) {
			Object.values(files)?.map(file => {
				if (file.size > 2864494) { // prevent too big files (CarouselProduct fails to render img hint onHover)
					alert(`File: "${file.name}" is too big. MAX FILE SIZE IS: 2.73 MB`)
					return
				}
				const reader = new FileReader();
				reader.addEventListener("load", () => {
					// 1. make previews
					previewSet(prev => ([...prev, reader.result]))
				});
				reader.readAsDataURL(file);
				// 2. upload imgs to Context
				// * only saves uploadedImg to Context, image upload happens in useAddImg
				uploadedImgSet(prev => [...prev, file])
			})
		}
	}

	return { preview, previewMake }
}
