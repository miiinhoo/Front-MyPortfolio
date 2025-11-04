import { useEffect } from "react";
import {
  addComment,
  deleteCommentById,
  getComments,
  togglePrivateById,
} from "../../api/FirebaseAPI";
import { Comment } from "../../arrays/CommentArrays";
import { initFormData } from "../../arrays/InitFormArray";
import useFirebase from "../../hooks/useFirebase";
import { useAdmin } from "../../routers/protected/AdminContext";
import useCustomHook from "../../hooks/useCustomHook";
import { formatDate } from "../../utils/formatDate";
import { hasBadWord } from "../../utils/filteredWord";

const api = { get: getComments, add: addComment };

export default function CommentPage() {
  const {
    formData,
    comments,
    tryGet,
    tryAdd,
    handleChange,
  } = useFirebase({
    initFormData: () => initFormData.commentPage,
    api,
  });

  const { isAdmin } = useAdmin();
  const { bool: isPrivate, setBool: setIsPrivate } = useCustomHook();

  useEffect(() => {
    console.log(isAdmin);
    tryGet();
  }, []);

  
  const sortedComments = comments
  .slice()
  .sort((a, b) => {
    if (a.userId === "관리자" && b.userId !== "관리자") return -1;
    if (a.userId !== "관리자" && b.userId === "관리자") return 1;
    return (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0);
  });

  const submitHandler = () => {
    if (!isAdmin && formData.userId.includes("admin") || formData.userId.includes("관리")) {
      alert("불가능한 아이디입니다.");
      return;
    }
    if (!formData.userId.trim()) {
      alert("아이디를 입력하세요.");
      return;
    } else if (!formData.password.trim()) {
      alert("비밀번호를 입력하세요.");
      return;
    } else if (!formData.comment.trim()) {
      alert("댓글을 입력하세요.");
      return;
    }

    

    if (
      hasBadWord(formData.comment) ||
      hasBadWord(formData.userId) ||
      hasBadWord(formData.password)
    ) {
      alert("부적절한 단어가 포함되어 있습니다.");
      return;
    }

    tryAdd(null, isPrivate);
  };

  return (
    <div className="main-content page">
      {sortedComments.length > 0 ? (
        <div className="comment-wrapper">
          {sortedComments.map((list, inx) => {
            if (list.isPrivate && !isAdmin)
              return (
                <p key={inx} className="comment-content private">
                  🔒 비밀글입니다.
                </p>
              );

            if (list.isHidden && !isAdmin)
              return (
                <p key={inx} className="comment-content hidden">
                  관리자가 비공개 처리한 댓글입니다.
                </p>
              );

            return (
              <div className="comment-content" key={inx}>
                <div className="comment">
                  <span className={list.isAdmin ? "admin-name" : ""}>
                    {list.isPrivate
                      ? `🔒 비밀글 ${list.userId}`
                      : list.isHidden
                      ? `숨긴글 ${list.userId}`
                      : list.userId}
                  </span>
                  <span>{list.comment}</span>
                  <span className="date">{formatDate(list.createdAt)}</span> {/* ✅ 날짜 표시 */}

                  {isAdmin && (
                    <>
                      <button
                        onClick={async () => {
                          await togglePrivateById(list.id, list.isHidden);
                          alert(
                            list.isHidden
                              ? "게시글이 공개로 변경되었습니다."
                              : "게시글이 비공개로 변경되었습니다."
                          );
                          tryGet();
                        }}
                      >
                        {list.isHidden ? "게시글 공개" : "게시글 비공개"}
                      </button>
                      <button
                        onClick={() => {
                          deleteCommentById(list.id);
                          alert("게시글이 삭제되었습니다.");
                          tryGet();
                        }}
                      >
                        삭제
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>데이터가 없네요.</p>
      )}

      {/* 댓글 입력 폼 */}
      <form className="comment-input">
        {Comment.map((i) => (
          <label key={i.id}>
            {i.type === "textarea" ? (
              <textarea
                placeholder={i.text}
                name={i.name}
                value={formData[i.name] || ""}
                onChange={handleChange}
              />
            ) : (
              <input
                type={i.type}
                name={i.name}
                placeholder={i.text}
                value={formData[i.name] || ""}
                onChange={handleChange}
              />
            )}
          </label>
        ))}

        <label className="secret-check">
          <input
            type="checkbox"
            checked={isPrivate}
            onChange={() => setIsPrivate((prev) => !prev)}
          />
          비밀글
        </label>

        <button type="button" onClick={submitHandler}>
          댓글작성
        </button>
      </form>
    </div>
  );
}
