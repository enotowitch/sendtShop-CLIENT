import { useState } from "react"

export default function useSkip() {

	const [skip, skipSet] = useState(0)

	return (
		{ skip, skipSet }
	)
}
