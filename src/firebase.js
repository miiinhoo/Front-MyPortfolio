
import { initializeApp } from "firebase/app";          
import { getFirestore } from "firebase/firestore";    
import { getAuth } from "firebase/auth";           


const firebaseConfig = {                            
  apiKey: "AIzaSyD9EMvNJD5lQBSy-kMHj6fOHLQs92S4X2U",  
  authDomain: "minho-ef723.firebaseapp.com",         
  projectId: "minho-ef723",                     
  storageBucket: "minho-ef723.firebasestorage.app",  
  messagingSenderId: "152785517959",                 
  appId: "1:152785517959:web:885800924877bf59a82722",
};


const app = initializeApp(firebaseConfig);            

// db/auth : 재사용할 인스턴스
export const db = getFirestore(app);                 
export const auth = getAuth(app);                    