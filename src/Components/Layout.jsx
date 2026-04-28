import { Outlet } from "react-router-dom";
import Header from "../pages/header";
import Footer from "../pages/footer";
import Social from "../Components/social";

function Layout() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Outlet />

        <footer className="mx-auto w-full max-w-[95rem] px-4 sm:px-5 md:px-8 lg:px-10">
          <div className="flex flex-col items-center justify-center">
            <Social />
            <Footer />
          </div>
        </footer>
      </main>
    </>
  );
}

export default Layout;