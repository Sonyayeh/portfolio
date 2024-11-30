import { Outlet } from "react-router-dom";
import Header from "../pages/header";
import Footer from "../pages/footer";
// I basically imported the header and footer to this file, so that
// every single page would have the header and footer when made
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
