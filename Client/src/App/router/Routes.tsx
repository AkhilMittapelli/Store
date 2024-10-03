import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../Features/home/Home";
import App from "../Layout/App";
import Catalog from "../../Features/catalog/Catalog";
import ProductDetails from "../../Features/catalog/ProductDetails";
import AboutPage from "../../Features/about/About";
import ContactPage from "../../Features/contact/Contact";

export const router=createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {path: '',element:<HomePage/>},
            {path: 'catalog',element:<Catalog/>},
            {path: 'catalog/:id',element:<ProductDetails/>},
            {path: 'about',element:<AboutPage/>},
            {path: 'contact',element:<ContactPage/>}
        ]
    }
])