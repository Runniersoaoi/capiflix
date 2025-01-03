import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateElement from "./components/CreateElement";
import Footer from "./components/Fotter";
import { ElementProvider } from "./context/ElementContext";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ElementProvider>
          <div className="flex flex-col min-h-screen bg-[#fff9ee] font-serif">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/capiflix" element={<Home />} />
                <Route path="/create" element={<CreateElement />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <ToastContainer position="bottom-right" />
        </ElementProvider>
      </Router>
    </>
  );
}

export default App;
