import { Outlet } from "react-router-dom";
import BasicHeader from "./header/BasicHeader";
import useCustomHook from "../hooks/useCustomHook";
import "./Layout.scss";

export default function BasicLayout(){
    const { location } = useCustomHook();
    return (
        <div className="site-wrapper">
            <header className={
                location.pathname !== "/" || 
                location.pathname.includes("/about") 
                ? 
                "rel"
                :
                ""
                }>
                <BasicHeader/>
            </header>
            <>
                <Outlet/>
            </>
        </div>
    )
}