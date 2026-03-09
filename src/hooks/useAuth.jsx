import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import useCustomHook from "./useCustomHook";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { useAdminStore } from "../utils/zustandSettings";


export default function useAuth(){

    const { navigate } = useCustomHook();

    // 관리자 로그인
    const handleAdminLogin = async(email, password,e) => {
    e.preventDefault();
    try{
        const userAuth = await signInWithEmailAndPassword(auth,email,pw);
        const token = userAuth.user.getIdTokenResult(true);


        if((await token).claims.admin){
        toast.success("관리자 로그인 성공");
        navigate("/");
        }
    }catch(e){
        toast.error("관리자로그인이 실패했습니다.",e.message);
        console.error("관리자로그인이 실패했습니다.",e.message)
    }
    }

    // 관리자 로그아웃
    const handleAdminLogout = async() => {
        try{
            await signOut(auth);
            toast.success("관리자 로그아웃 성공.");
        }catch(error){
            toast.error("관리자 로그아웃이 실패했습니다.",error.message);
            console.error("관리자 로그아웃이 실패했습니다.",error.message);
        }
    }

        return{
            handleAdminLogin,
            handleAdminLogout
        }
    }