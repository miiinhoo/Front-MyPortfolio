
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../firebase";                                    
import { 
  collection, addDoc, getDocs, query, orderBy, deleteDoc, doc,
  serverTimestamp, 
  updateDoc
} from "firebase/firestore";                                        

export const addComment = async (data) => {                         

  const payload = {                                               
    userId: data.userId,                                            
    comment: data.comment,                                           
    passwordHash: data.passwordHash,                                  
    createdAt: serverTimestamp(),                                   
    uid: data.uid ?? null, 
    isPrivate: data.isPrivate ?? false,                                     
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
// 관리자 로그인
export async function loginAdmin(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("로그인 성공:", user.user.email);

    const token = await user.user.getIdTokenResult(true);
    if (token.claims.admin) {
      console.log("관리자 로그인 확인됨");
    } else {
      console.warn("관리자 권한 없음");
    }
  } catch (err) {
    console.error("로그인 실패:", err);
  }
}

// 관리자 로그아웃
export async function logoutAdmin() {
  try {
    await signOut(auth);
    alert("로그아웃 되었습니다.");
    console.log("로그아웃 완료");
  } catch (err) {
    console.error("로그아웃 실패:", err);
  }
}