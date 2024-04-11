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

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootPage />} path="/">
        <Route element={<HomePage />} index ></Route>
        <Route element={<FormatsPage />} path='formats'></Route>
        <Route element={<ThemesPage />} path='themes'></Route>
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
