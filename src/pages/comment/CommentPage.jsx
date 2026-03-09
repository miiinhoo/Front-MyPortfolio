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
import { formatDate } from "../../utils/formatDate";
import { hasBadWord } from "../../utils/filteredWord";
import useComments from "../../hooks/useComments";
import usePagenation from "../../components/usePagination";

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

  //페이지네이션 기능 추가
  const {
    page,
    pageNumbers,
    pageItems,
    hasNextGroup,
    hasPrevGroup,
    goNext,
    goPrev,
    setPage,
  } = usePagenation(formData,10,9);

  // 댓글작성기능
  const { submitHandler } = useComments(formData, tryAdd,hasBadWord);
  // 관리자 판별 boolean
  const { isAdmin } = useAdmin();

  useEffect(() => {
    console.log(isAdmin);
    tryGet();
  }, []);


  return (
    <div className="main-content page">
      <div className="left-section">
        좌측 구역
      </div>
      <div className="right-section">
      {comments.length > 0 ? (
        <div className="comment-wrapper">
          {comments.map((list, inx) => {
           
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
                    {list.isHidden
                      ? `숨긴글 익명`+inx
                      : list.isAdmin ? "관리자" : "익명" + inx}
                  </span>
                  <span>{list.comment}</span>
                  <span className="date">{formatDate(list.createdAt)}</span>

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
    {/** 댓글창 페이지네이션 구역 */}
    <div className="pagenation">
      
    </div>
      {/* 댓글 입력 폼 */}
      <form className="comment-input">
      {Comment.map((i) => (
        <label key={i.id}>
          <textarea
            style={{ resize: "none"}}
            placeholder="익명으로 글을 남겨보세요."
            name={i.name}
            value={formData[i.name] || ""}
            onChange={handleChange}
          />
        </label>
      ))}

        

        <button type="button" onClick={submitHandler}>
          댓글작성
        </button>
      </form>
      </div>
    </div>
  );
}
