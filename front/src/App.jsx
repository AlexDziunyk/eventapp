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
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CreateEventPage from './pages/CreateEventPage/CreateEventPage';
import EventPage from './pages/EventPage/EventPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootPage />} path="/">
        <Route element={<HomePage />} index ></Route>
        <Route element={<FormatsPage />} path='formats'></Route>
        <Route element={<ThemesPage />} path='themes'></Route>
        <Route element={<LoginPage />} path='login'></Route>
        <Route element={<SignUpPage />} path='signup'></Route>
        <Route element={<ProfilePage />} path='profile'></Route>
        <Route element={<CreateEventPage />} path='create'></Route>
        <Route element={<EventPage />} path='events/:id'></Route>
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
