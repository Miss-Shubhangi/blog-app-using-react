import ReactDom from "react-dom/client"
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from "./Views/Home/home";
import "./index.css"
import BlogPreview from "./Views/Blog-Preview/blogview"

const root =ReactDom.createRoot(document.getElementById("root"))

const router = createBrowserRouter([

  {
    path:"/",
    element : <Home/>
  },
  {
    path : "/blog/:id",
    element:<BlogPreview/>
  }
])


  root.render(
   <RouterProvider router= {router}/>
  )  
