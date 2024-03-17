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
  // const Layout = () => {
  //   return (
  //     <ThemeContext.Provider>
  //     <div className="flex flex-col items-center h-lvh bg-white dark:bg-[#22262f]">
  //       <Header />
  //       <div className="container flex">
  //         <Outlet />
  //       </div>
  //       <Footer />
  //     </div>
  //     </ThemeContext.Provider>
  //   );
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/blogs",
  //         element: <Blogs />,
  //         children: [
  //           {
  //             path: "/blogs/:id",
  //             element: <BlogDetail />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  // ]);

  return (
    <ThemeProvider>
      <div className="flex flex-col items-center h-[100%] bg-white dark:bg-[#22262f]">
        <Header />
        <div className="container flex h-[100%]">
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
