import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import { lazy, Suspense } from "react";
import { AdminProvider } from "./protected/AdminContext";
import AboutRouter from "./AboutRouter";

const loading = <div>로딩중..</div>;
const MainPage = lazy(() => import("../pages/MainPage"));
const CommentPage = lazy(() => import("../pages/comment/CommentPage"));
const AdminLogin = lazy(() => import("../pages/AdminLogin"));

const root = createBrowserRouter([
    {
        path:"/",
        element:
        <AdminProvider>
            <BasicLayout/>
        </AdminProvider>,
        children:[
            {
                index:true,
                element:
                <Suspense fallback={loading}>
                    <MainPage/>
                </Suspense>
            },
            {
                path:"about",
                children: AboutRouter,
            },
            {
                path:"comment",
                element:
                <Suspense fallback={loading}>
                    <CommentPage/>
                </Suspense>
            },
            {
                path:"admin",
                element:
                <Suspense fallback={loading}>
                    <AdminLogin/>
                </Suspense>
            }
        ]   
    }
])
export default root;