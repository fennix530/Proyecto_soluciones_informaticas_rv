import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <main className="container">
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
      <Footer />
    </div>
  );
}
