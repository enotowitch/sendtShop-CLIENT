export default function cleanTimestamp(mongoDbTimestamp, isWithTime = true) {
	if (isWithTime) {
		return mongoDbTimestamp.replace(/T/, " / ").replace(/\..+/, "")
	} else { // without time
		return mongoDbTimestamp.replace(/T.+/, "")
	}
}