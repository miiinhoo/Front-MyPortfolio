import { signInWithEmailAndPassword } from "firebase/auth";
import useCustomHook from "./useCustomHook";
import { auth } from "../firebase";


export default function useAuth(){

    const { navigate } = useCustomHook();

    // 관리자 로그인
    const handleAdminLogin = async(email, pw, e) => {
    e.preventDefault();
    try{
        const userAuth = await signInWithEmailAndPassword(auth,email,pw);
        const token = userAuth.user.getIdTokenResult(true);

        if((await token).claims.admin){
        alert("관리자 로그인 성공");
        navigate("/");
        }else{
            console.log("에러");
        }
    }catch(e){
        console.error("관리자로그인이 실패했습니다.",e.message)
    }
    }

        return{
            handleAdminLogin
        }
    }