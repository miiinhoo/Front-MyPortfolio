import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import WorkRouter from "./WorkRouter";

const loading = <div>로딩중..</div>;
const Profile = lazy(() => import("../pages/about/ProfilePage"));


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
    path: "works",
    children: [...WorkRouter]
  },  
];

export default AboutRouter;
