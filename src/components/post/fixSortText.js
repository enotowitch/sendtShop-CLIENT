import sortProductOptions from "./sortProductOptions"

export default function fixSortText(paramName, paramValue) {
	if (paramName === "sort") {
		sortProductOptions?.map(item => {
			if (item.value === paramValue) {
				paramValue = item.text
			}
		})
	}

	return paramValue
}