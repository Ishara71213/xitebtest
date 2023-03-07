import "./RootLayout.css";
// components
import { HeaderNavigation } from "../../common/HeaderNavigation/HeaderNavigation";
import { Footer } from "../../common/footer/Footer";

// hooks and libraries
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-container">
      <header className="header-container">
        <HeaderNavigation />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
