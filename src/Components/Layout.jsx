import { Outlet } from "react-router-dom";
import Header from "../pages/header";
import Footer from "../pages/footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
