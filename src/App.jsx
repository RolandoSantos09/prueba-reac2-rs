import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Carrito } from "./Views/Carrito";
import { Pizza } from "./Views/Pizza";
import { Home } from "./Views/Home";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
