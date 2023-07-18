import { initializeApp } from "firebase/app";
// auth
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCgbu6OZuD-4cirnYEz08vkGZAq82HgM7Q",
	authDomain: "sendt-shop.firebaseapp.com",
	projectId: "sendt-shop",
	storageBucket: "sendt-shop.appspot.com",
	messagingSenderId: "880740771197",
	appId: "1:880740771197:web:3627f27ed6e25ee6045814"
};

const app = initializeApp(firebaseConfig);
// auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();