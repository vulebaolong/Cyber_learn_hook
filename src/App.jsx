import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import MainLayout from "./layout/MainLayout/MainLayout";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
import AddMovie from "./pages/AddMovie/AddMovie";
import AddUser from "./pages/AddUser/AddUser";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Search from "./pages/Search/Search";
import DemoUseRef from "./pages/DemoUseRef/DemoUseRef";

function App() {
    return (
        <>
            <Routes>
                {/* MainLayout */}
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/list-movie" element={<Home />} />
                    <Route path="/list-movie/:id" element={<MovieDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/useref" element={<DemoUseRef />} />
                </Route>

                {/* AdminLayout */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="add-movie" element={<AddMovie />} />
                    <Route path="add-user" element={<AddUser />} />
                </Route>
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </>
    );
}

export default App;
