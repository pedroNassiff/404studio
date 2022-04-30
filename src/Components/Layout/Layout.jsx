import Footer from "../Shared/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <nav></nav>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
