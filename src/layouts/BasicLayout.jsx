import { Outlet } from "react-router-dom";
import BasicHeader from "./header/BasicHeader";
import useCustomHook from "../hooks/useCustomHook";

export default function BasicLayout(){
    const { location } = useCustomHook();
    return (
        <div className="site-wrapper">
            <header className={location.pathname !== "/" ? "rel":""}>
                <BasicHeader/>
            </header>
            <>
                <Outlet/>
            </>
        </div>
    )
}