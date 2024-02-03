import Home from "./component/Home";
import Menue from "./component/Menue"
import NavBar from "./component/NavBar"
import Footer from "./component/Footer"
import Login from "./pages/Login";
import { Outlet} from "react-router";
import { createBrowserRouter } from "react-router-dom";


const Layout = () => {
    return (
      <div>
        <NavBar />
        <div className=" flex bg-primary-h1">
          <Menue />
          <Outlet/>
        </div>
        <Footer />
      </div>
    );
  };

const route = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path : "/",
          element :  <Home/>,
        },
      ]
    },
    {
        path : "/login",
        element : <Login/>

    }
  ])



export default route;