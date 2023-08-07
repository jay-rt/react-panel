import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="contianer">
      <Navbar />
      <div className="main__container">
        <Sidebar />
        <main className="main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
