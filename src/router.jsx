// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import About from "./About";
// import Home from "./Home";
// import Skill from "./Skill";
// import Project from "./Project";
// import Contact from "./contact";

// export const myrouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children:([
//             {
//                 path: "/home",
//                 element: <Home />
//             },
//             {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/skill",
//         element: <Skill />
//       },

//       {
//            path: "/project",
//               element: <Project />
//       },

//       {
//         path: "/contact",
//         element: <Contact />
//       }
                
//         ])

//     }
// ])


import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./About";
import Home from "./Home";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./contact";

// Create the router
export const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This is the root route for your application
    children: [
      {
        path: "", // Relative path for Home ("/home")
        element: <Home />,
      },
      {
        path: "about", // Relative path for About ("/about")
        element: <About />,
      },
      {
        path: "skill", // Relative path for Skill ("/skill")
        element: <Skill />,
      },
      {
        path: "project", // Relative path for Project ("/project")
        element: <Project />,
      },
      {
        path: "contact", // Relative path for Contact ("/contact")
        element: <Contact />,
      },
    ],
  },
]);

