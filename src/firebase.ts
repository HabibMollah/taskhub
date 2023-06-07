import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIRpB_wYhTBSSWRUA-s6th49s5-e0xrrQ",
  authDomain: "taskhub-af916.firebaseapp.com",
  projectId: "taskhub-af916",
  storageBucket: "taskhub-af916.appspot.com",
  messagingSenderId: "65238170802",
  appId: "1:65238170802:web:88a32a5f46337f89659dab",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
