import { useEffect } from "react";
import { createContext } from "react";
import { auth } from "../../firebase";
import { useContext } from "react";
import { useAdminStore } from "../../utils/zustandSettings";

const AdminContext = createContext(null);

export function AdminProvider({children}){

    const isAdmin = useAdminStore(state => state.isAdmin);
    const setIsAdmin = useAdminStore(state => state.setIsAdmin);

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
        const unsubscribe = auth.onAuthStateChanged((user) => checkRole(user));
        return () => unsubscribe();
    },[setIsAdmin]);

    return(
        <AdminContext.Provider value={{ isAdmin }}>
            {children}
        </AdminContext.Provider>
    )
}
export function useAdmin(){
    return useContext(AdminContext);
}