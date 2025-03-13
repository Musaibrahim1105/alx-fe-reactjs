import  {createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

const router = createBrowserRouter([

    {
        path: "/",
        Component: Home
    },
    {
        path: "/about",
        Component: About
    },
    {path: "/contact",
        Component: Contact
    },
    {
        path: "/services",
        Component: Services
    }
])

export default router;