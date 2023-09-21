import { createSearchParams, useNavigate } from "react-router-dom"
import { MAIN_ROUTE } from "../consts";

export default function useWriteSearchParams() {

	const navigate = useNavigate()

	function writeSearchParams(objToWrite) { // eg: currentSearchParams
		navigate({
			pathname: MAIN_ROUTE,
			search: createSearchParams(objToWrite).toString()
		});
		localStorage.setItem("filters", JSON.stringify(objToWrite)) // memo search params
	}

	return (
		{ writeSearchParams }
	)
}
