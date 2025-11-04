// useFirebase.jsx
import { auth } from "../firebase";
import { hashPassword } from "../utils/hashPassword";
import { useState } from "react";

export default function useFirebase({ initFormData, api }) {
  const [formData, setFormData] = useState(initFormData());
  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const tryGet = async () => {
    const list = await api.get();
    setComments(list);
  };

  const tryAdd = async (uid = null, isPrivate = false, isHidden = false) => {
    try {
      const user = auth.currentUser;
      let userId = formData.userId;
      let userUid = uid;
      let isAdminUser = false;

      if (user) {
        const token = await user.getIdTokenResult(true);
        if (token?.claims?.admin) {
          userId = "관리자";
          userUid = user.uid;
          isAdminUser = true;
        } else {
          userUid = user.uid;
        }
      }

      const payload = {
        userId,
        comment: formData.comment,
        passwordHash: await hashPassword(formData.password),
        uid: userUid ?? null,
        isPrivate,
        isHidden,
        isAdmin: isAdminUser, 
        createdAt: new Date(), 
      };
      alert("댓글 작성 완료!");
      await api.add(payload);
      setFormData(initFormData());
      await tryGet();
    } catch (err) {
      console.error("댓글 작성 실패:", err);
      alert("댓글 작성 중 오류가 발생했습니다.");
    }
  };

  return { formData, setFormData, comments, handleChange, tryGet, tryAdd };
}
