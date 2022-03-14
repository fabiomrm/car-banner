import { Navbar } from "Navbar";
import { Catalog } from "pages/Catalog";
import { Home } from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cars" element={<Catalog />}/>
            </Routes>
        </BrowserRouter>
    )
}