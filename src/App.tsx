import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import LandingPage from "./pages/landing-page";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { useMemo, useState } from "react";
import ProductsPage from "./pages/products";
import CartPage from "./pages/cart";
import AboutPage from "./pages/about";
import OrderHistoryPage from "./pages/orders";
import CategoryPage from "./pages/category";
import CategoryIdPage from "./pages/category/categoryId";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevNode) => (prevNode === "light" ? "dark" : "light"));
    },
  }),[]);

  const theme = useMemo(() => createTheme({
    palette: {
      mode
    }
  }),[mode]);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Header colorMode={colorMode} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/category/:categoryId" element={<CategoryIdPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
