import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const RootPage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default RootPage