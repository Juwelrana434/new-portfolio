
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import App from "../App";
import Error from "../Error/Error";
import Skill from "../Layout/Skill/Skill";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
        path: "/skill",
        element:<Skill></Skill> ,
      },
        
      ],
    },
    
  ]);