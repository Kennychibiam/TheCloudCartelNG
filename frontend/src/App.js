import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header className="header">
          <NavBar />
        </header>
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer"></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
