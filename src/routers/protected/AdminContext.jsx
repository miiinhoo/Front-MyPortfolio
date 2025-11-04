import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../../firebase";
import { useContext } from "react";

const AdminContext = createContext(null);

export function AdminProvider({children}){
    const [ isAdmin , setIsAdmin ] = useState(false);

    useEffect(() => {
        async function checkRole(){
            const user = auth.currentUser;

            if(!user){
                setIsAdmin(false);
                return;
            }
            const token = await user.getIdTokenResult(true);
            setIsAdmin(!!token.claims.admin);
        }
        const checkedUser = auth.onAuthStateChanged(() => checkRole());
        return () => checkedUser();
    },[]);

    return(
        <AdminContext.Provider value={{ isAdmin }}>
            {children}
        </AdminContext.Provider>
    )
}
export function useAdmin(){
    return useContext(AdminContext);
}