
import {
  RouterProvider,
  createBrowserRouter,
  Outlet
} from "react-router-dom";

import './style.scss'

import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import AboutUs from "./pages/about_us/AboutUs";
import Contact from "./pages/contact_us/Contact";
import SingleService from "./pages/single_service/SingleService";


function App() {

  const Layout = () => {
    return (
      <>
        <Nav/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <AboutUs/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/service',
          element: <SingleService/>
        }
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
