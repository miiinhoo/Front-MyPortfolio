// 댓글 폼 + 목록 상태/행동 훅
import { useState } from "react";                 
import { hashPassword } from "../utils/hashPassword";  
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import useCustomHook from "./useCustomHook";

export default function useFirebase({ initFormData, api }) {

  

  // formData : 입력폼 상태
  const [formData, setFormData] = useState(initFormData());
  // comments : 댓글 리스트
  const [comments, setComments] = useState([]);       
  // loading : 로딩여부
  const [loading, setLoading] = useState(false);       
  // error : 에러메시지
  const [error, setError] = useState(null);             

  const handleChange = (e) => {                          
    const { name, value } = e.target;                    
    setFormData(prev => ({ ...prev, [name]: value }));  
  };

  // tryGet : 댓글 조회
  const tryGet = async () => {                            
    try {
      setLoading(true);                                   
      const list = await api.get();                       
      setComments(list);                            
      setError(null);                                                                 
    } catch (err) {
      setError("조회 실패");                          
      console.error(err);                             
      return [];
    } finally {
      setLoading(false);                            
    }
  };

  // tryAdd : 댓글 추가
  const tryAdd = async (uid = null) => {                   
    try {
      setLoading(true);     
      const user = auth.currentUser;
      const token = await user.getIdTokenResult();

      const payload = {                                   
      userId: token.claims.admin ? "관리자" : formData.userId,                          
        comment: formData.comment,                          
        passwordHash: await hashPassword(formData.password),
        uid,                                                
      };
      await api.add(payload);                              
      console.log("추가성공")
      setFormData(initFormData());                         
      await tryGet();                                 
    } catch (err) {
      setError("추가 실패");                             
      console.error(err);                            
    } finally {
      setLoading(false);                                    
    }
  };

  
  return {                                                 
    formData,                                              
    setFormData,                                   
    comments,                                          
    loading,                                      
    error,                                         
    handleChange,                                   
    tryGet,                                   
    tryAdd,                                         
  };
}
