import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import About from "./screens/About";
import Author from "./screens/Author";
import Book from "./components/Book";
import Chapter from "./screens/Chapter";
import Character from "./screens/Character";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "author/:name",
                element: <Author />,
                children: [
                    {
                        path: ":book",
                        element: <Book />,
                        children: [
                            {
                                path: "chapters",
                                element: <Chapter />
                            },
                            {
                                path: "characters",
                                element: <Character />
                            }
                        ]
                    }
                ]
            }
        ],
        errorElement: <NotFound />
    }
])

export default router;