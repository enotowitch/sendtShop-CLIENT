import { useSearchParams } from "react-router-dom"

export default function useCurrentSearchParams() {

	const [searchParams] = useSearchParams()
	const currentSearchParams = Object.fromEntries([...searchParams])

	return (
		{ currentSearchParams }
	)
}
