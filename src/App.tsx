import { Routes, Route } from "react-router-dom";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import TicketsPage from "./pages/TicketsPage";
import Header from "./components/Header";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/confirm" element={<Confirmation />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
