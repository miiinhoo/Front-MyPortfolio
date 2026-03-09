import toast from "react-hot-toast";


export default function useComments(form, tryAdd,hasBadWord){
    
   // 댓글 전송 핸들러
    const submitHandler = () => {
  
        // 댓글을 입력하지 않았다면, 에러 메시지 출력
        if (!form.comment.trim()) {
          toast.error("댓글을 입력하세요.");
          return;
        }
    
        // filteredWord.tsx에서 생성한 hasBadWord 상수를 가져와 부적절한 단어 필터링.
        if (hasBadWord(form.comment)) {
          toast.error("댓글에 부적절한 단어가 포함되어 있습니다.");
          return;
        }
    
        tryAdd();
      };
    return{
        
        submitHandler,
    }
}
