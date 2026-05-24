import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { Home } from "../pages/Home";
import { Game } from "../pages/Game";
import { Result } from "../pages/Result";


export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "/game",
                    element: <Game />,
                },
                {
                    path: "/result",
                    element: <Result />,
                }
            ],
        },
    ],
    {
        basename: "/mini-random-flag-quiz",
        // basename: "/",
    }
);