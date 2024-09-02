// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKyJylyFJRoposNPKdNs9e83ZKa3jZa9o",
  authDomain: "chat-app-80ff3.firebaseapp.com",
  projectId: "chat-app-80ff3",
  storageBucket: "chat-app-80ff3.appspot.com",
  messagingSenderId: "634061529207",
  appId: "1:634061529207:web:9d5797045d323c56e96672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey, there! I am using the chat app",
      lastseen: Date.now()
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: []
    });
    toast.success("Account created successfully!");
  } catch (error) {
    console.error(error);
    toast.error(error.code);
  }
};

const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully!");
  } catch (error) {
    console.error(error);
    toast.error(error.code);
  }
};

export { signup, loginUser };
