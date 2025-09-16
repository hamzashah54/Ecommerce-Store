import Products from "./components/Product";
import { Header } from "./components/Header";
import { Herosec } from "./components/Herosec";
import { Category } from "./components/Category";
import { PreFooter } from "./components/Pre-Footer";
import Footer from "./components/Footer";
import LoginForm from "./components/Login-Signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CartProvider } from "./contexts/cart-context";
import SearchResults from "./components/SearchResults";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [tempQuery, setTempQuery] = useState("");

  const navigate = useNavigate();

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (tempQuery.trim()) {
      setSearchQuery(tempQuery);
      navigate("/search");
    }
    setTempQuery("");
  }

  return (
    <CartProvider>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        tempQuery={tempQuery}
        setTempQuery={setTempQuery}
        handleSearchSubmit={handleSearchSubmit}
      />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <section className="relative w-full">
                <Herosec />
              </section>

              <section className="snap-start min-h-screen flex items-center justify-center bg-[#FFFDF0] py-8 sm:py-12 lg:py-16">
                <Category />
              </section>

              <section className="snap-start flex flex-col items-center justify-center bg-[#FFFDF0] py-8 sm:py-12 lg:py-16">
                <Products />
              </section>

              <section className="snap-start min-h-screen flex flex-col items-center justify-center bg-[#FFFDF0] py-8 sm:py-12 lg:py-16">
                <PreFooter />
              </section>
            </div>
          }
        />

        {/* Search Page */}
        <Route
          path="/search"
          element={<SearchResults searchQuery={searchQuery} />}
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={
            <LoginForm setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
          }
        />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;
