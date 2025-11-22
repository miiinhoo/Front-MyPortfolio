import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import WorkRouter from "./WorkRouter";

const loading = <div>로딩중..</div>;
const Profile = lazy(() => import("../pages/about/ProfilePage"));
const Work = lazy(() => import("../pages/about/WorkPage"));

const AboutRouter = [
  {
    index:true,
    element: (
      <Suspense fallback={loading}>
        <Navigate replace to="profile" />
      </Suspense>
    ),
  },
  {
    path: "profile",
    element: (
      <Suspense fallback={loading}>
        <Profile />
      </Suspense>
    ),
  },
  {
    path: "work",
    element: (
      <Suspense fallback={loading}>
        <Work/>
      </Suspense>
    ),
    children: WorkRouter
  },  
];

export default AboutRouter;
