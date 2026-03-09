
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../firebase";                                    
import { 
  collection, addDoc, getDocs, query, orderBy, deleteDoc, doc,
  serverTimestamp, 
  updateDoc
} from "firebase/firestore";                                        

export const addComment = async (data) => {                         

  const payload = {                                                                                    
    comment: data.comment,                                           
    passwordHash: data.passwordHash,                                  
    createdAt: serverTimestamp(),                                   
    uid: data.uid ?? null,                                 
  };
  return await addDoc(collection(db, "comments"), payload);       
};


export const getComments = async () => {
  const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const deleteCommentById = async (id) => {                   
  await deleteDoc(doc(db, "comments", id));                          
};

export const togglePrivateById = async (id, currentState) => {
  const commentRef = doc(db, "comments", id);
  await updateDoc(commentRef, { isHidden: !currentState });
};
// ----기존 관리자 로그인,아웃 기능 삭제( api기능만 담당하게끔 ) -----

