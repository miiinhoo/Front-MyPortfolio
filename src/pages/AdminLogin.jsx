import { useState } from "react";
import { Admin } from "../arrays/CommentArrays";
import ButtonComponent from "../components/common/ButtonComponent";
import useAuth from "../hooks/useAuth";

export default function AdminLogin(){
    const { handleAdminLogin } = useAuth();

    const [ email, setEmail ] = useState("");
    const [ pw, setPw ] = useState(""); 
    

    const handleSubmit = (e) => {
        handleAdminLogin(email, pw,e);
    };
    return(
        <div className="main-content page">
            <h2>
                관리자 로그인 페이지
            </h2>
            <form onSubmit={handleSubmit}>
                {
                    Admin.map(i => (
                        <input 
                        key={i.id}
                        type={i.type} 
                        value={i.name === "email" ? email : pw}
                        placeholder={i.text}
                        onChange={(e) => {
                            if(i.name === "email"){
                                setEmail(e.target.value);
                            }else{
                                setPw(e.target.value);
                            }
                        }}/>
                    ))
                }
                <ButtonComponent text={"관리자 로그인"} cln={"admin-login"}
                types={"submit"}
                />
            </form>
        </div>
    )
}