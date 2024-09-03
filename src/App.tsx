import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Header from "./components/layout/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
