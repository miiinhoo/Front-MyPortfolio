import { lazy,Suspense } from "react"

const loading = <div>로딩중...</div>

const Work = lazy(() => import("../pages/about/WorkPage"));
const Wooden = lazy(() => import("../pages/about/work/WoodenPage"));
const FontLab = lazy(() => import("../pages/about/work/FontLabPage"));
const Python = lazy(() => import("../pages/about/work/PythonPage"));

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
        path:"fontlab",
        element:(
        <Suspense fallback={loading}>
            <FontLab/>
        </Suspense>)
    },
    {
        path:"python",
        element:(
            <Suspense fallback={loading}>
                <Python/>
            </Suspense>
        )
    }
]

export default WorkRouter;