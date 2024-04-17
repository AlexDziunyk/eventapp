import './App.css'
import MainEventItem from './components/MainEventItem/MainEventItem'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootPage from './pages/RootPage/RootPage';
import FormatItem from './components/FormatItem/FormatItem';
import FormatsPage from './pages/FormatsPage/FormatsPage';
import ThemesPage from './pages/ThemesPage/ThemesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootPage />} path="/">
        <Route element={<HomePage />} index ></Route>
        <Route element={<FormatsPage />} path='formats'></Route>
        <Route element={<ThemesPage />} path='themes'></Route>
        <Route element={<LoginPage />} path='login'></Route>
        <Route element={<SignUpPage />} path='signup'></Route>
      </Route>
    )
  );

  return (
    <div className='app'>
      <RouterProvider router={router} />

    </div>
  )
}

export default App
