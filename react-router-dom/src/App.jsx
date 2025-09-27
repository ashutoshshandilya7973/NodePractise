import {createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router";
import Demo from "./Demo";
import Ashu from "./Ashu";
function App() {
   
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Ashu/>
    },
    {
      path:"/demo",
      element:<Demo/>
    }
  ])
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
