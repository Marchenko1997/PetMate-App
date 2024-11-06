import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout.jsx";
import { RestrictedRoute } from "./RestrictedRoute.jsx";
import  PrivateRoute  from "./PrivateRoute.jsx";

const HomePage = lazy(() => import("../pages/Home/HomePage.jsx"));
const Login = lazy(() => import("../pages/Login/Login.jsx"));
const Register = lazy(() => import("../pages/Register/Register.jsx"));
const Notices = lazy(() => import("../pages/Notices/Notices"));
const News = lazy(() => import("../pages/News/News.jsx"))
const Profile = lazy(() => import("../pages/Profile/Profile"));
const AddPet = lazy(() => import("../pages/AddPet/AddPet"));
const Favorites = lazy(() =>
  import("../components/ForProfilePage/Favorites/Favorites")
);
const Friends = lazy(() => import("../pages/Friends/Friends"));
const Viewed = lazy(() => import("../components/ForProfilePage/Viewed/Viewed"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="friends" element={<Friends />} />
          <Route path="notices" element={<Notices />} />
          <Route path="news" element={<News />} />
          <Route
            path="profile"
            element={
              <PrivateRoute redirectTo="/home" component={<Profile />} />
            }
          >
            <Route index element={<Favorites />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="viewed" element={<Viewed />} />
          </Route>
          <Route
            path="add-pet"
            element={<PrivateRoute redirectTo="/home" component={<AddPet />} />}
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/profile" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/profile" component={<Register />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
