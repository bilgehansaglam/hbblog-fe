import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";
import Register from "./pages/Register";
import Blogs from "./pages/Blogs";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center h-screen bg-white dark:bg-[#22262f]">
        <Header />
        <div className="container flex h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blogs" element={<Blogs />}>
              <Route path=":id" element={<BlogDetail />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
