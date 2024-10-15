import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(()=> import("./pages/Home/HomePage.jsx"))

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
    </Routes>
    </>
  )
}

export default App