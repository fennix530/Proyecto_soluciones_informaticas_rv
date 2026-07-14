import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
}
