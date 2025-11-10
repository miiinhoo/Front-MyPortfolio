import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const loading = <div>로딩중..</div>;
const Profile = lazy(() => import("../pages/about/ProfilePage"));
const Project = lazy(() => import("../pages/about/ProjectPage"));

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
        <Project />
      </Suspense>
    ),
  },
];

export default AboutRouter;
