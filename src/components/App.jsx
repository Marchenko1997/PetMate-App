import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout.jsx';
import { RestrictedRoute } from "./RestrictedRoute.jsx";

const HomePage = lazy(() => import("../pages/Home/HomePage.jsx"))
const Login = lazy(() => import("../pages/Login/Login.jsx"))
const Register = lazy(() => import("../pages/Register/Register.jsx"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/profile" component={<Login />} />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/profile" component={<Register/>} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App