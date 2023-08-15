export default function getServerImgName(serverImgPath) { // eg: serverImgPath="http://server/upload/istockphoto1.jpg"
	return serverImgPath.replace(/.+\//, "") // eg: istockphoto-1.jpg
}