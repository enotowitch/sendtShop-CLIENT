export default function getServerFileName(serverFilePath) { // eg: serverFilePath="http://server/upload/istockphoto1.jpg"
	return serverFilePath?.replace(/.+\//, "") // eg: istockphoto-1.jpg
}