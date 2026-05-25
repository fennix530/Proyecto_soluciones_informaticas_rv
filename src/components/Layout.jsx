import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <NavBar />
      <main style={{ flex: 1, padding: "1rem" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
