import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout.jsx";
import { RestrictedRoute } from "./RestrictedRoute.jsx";
import  PrivateRoute  from "./PrivateRoute.jsx";

const HomePage = lazy(() => import("../pages/Home/HomePage.jsx"));
const Login = lazy(() => import("../pages/Login/Login.jsx"));
const Register = lazy(() => import("../pages/Register/Register.jsx"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Favorites = lazy(() =>
  import("../components/ForProfilePage/Favorites/Favorites")
);
const Viewed = lazy(() => import("../components/ForProfilePage/Viewed/Viewed"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
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
