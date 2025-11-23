import { lazy,Suspense } from "react"

const loading = <div>로딩중...</div>

const Work = lazy(() => import("../pages/about/WorkPage"));
const Wooden = lazy(() => import("../pages/about/work/WoodenPage"));
const Python = lazy(() => import("../pages/about/work/PythonPage"));
const Paytime = lazy(() => import("../pages/about/work/PaytimePage"));

const WorkRouter = [
    {
        index:true,
        element: (
            <Suspense fallback={loading}>
                <Work/>
            </Suspense>
        )
    },
    {
        path:"wooden",
        element: (
        <Suspense fallback={loading}>
            <Wooden/>
        </Suspense>),
    },
    {
        path:"python",
        element:(
        <Suspense fallback={loading}>
            <Python/>
        </Suspense>),
    },
    {
        path:"paytime",
        element:(
        <Suspense fallback={loading}>
            <Paytime/>
        </Suspense>)
    }
]

export default WorkRouter;