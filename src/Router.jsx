import { createBrowserRouter } from 'react-router-dom';
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { MoviesList } from "./pages/MoviesList";
import { MovieDetails } from "./pages/MovieDetails";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const Router = createBrowserRouter([
    {   path: "/bienvenida", element: <Home />},
    {
        path: "/", element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/movies", element: <MoviesList /> },
            { path: "/movie/:id", element: <MovieDetails /> },
            { path: "/contact", element: <Contact /> },
            { path: "*", element: <NotFound /> }
        ]
    }   
]);