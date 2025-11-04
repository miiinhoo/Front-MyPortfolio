import { useEffect } from "react";
import { addComment, deleteCommentById, getComments } from "../../api/FirebaseAPI";
import { Comment } from "../../arrays/CommentArrays";
import { initFormData } from "../../arrays/InitFormArray";
import useFirebase from "../../hooks/useFirebase";
import { useAdmin } from "../../routers/protected/AdminContext";

const api = {
    get: getComments,
    add: addComment,
}

export default function CommentPage(){
    const { formData,comments,tryGet,tryAdd,handleChange } = useFirebase({
        initFormData:() => initFormData.commentPage,
        api,
    });

    const {isAdmin} = useAdmin();

    useEffect(() => {
        console.log("isAdmin 테스트 > ", isAdmin);

        tryGet()
    },[])
    return(
        <div className="main-content page">
            {
                comments.length > 0 ?
                <div className="comment-wrapper">
                    {comments.map((list,inx) => (
                        <p className="comment-content" key={inx}>
                            <span>
                                {list.userId}
                            </span>
                            <p>
                                {list.comment}
                            </p>
                            {isAdmin && (
                                <button onClick={() => {
                                    alert("게시글이 삭제되었습니다.")
                                    deleteCommentById(list.id);
                                    tryGet();
                                }}>관리자 삭제</button>
                            )}
                        </p>
                    ))}
                </div>
                :
                <p>
                    데이터가 없네요.
                </p>
            }
            <form action="">
                {Comment.map(i => (
                    <label key={i.id}>
                        {i.type === "textarea" ?
                        <textarea
                        placeholder={i.text}
                        name={i.name}
                        value={formData[i.name] || ""}
                        onChange={handleChange}>
                        </textarea>
                        :
                        <input type={i.type} 
                        name={i.name}
                        placeholder={i.text}
                        value={formData[i.name] || ""}
                        onChange={handleChange}/>
                        }
                    </label>
                ))}
                <button type="button" onClick={() => tryAdd(null)}>
                    댓글작성
                </button>
            </form>
        </div>
    )
}