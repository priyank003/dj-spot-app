import { Navbar } from "./shared/components";
import { Landing, Features } from "./pages/Home/containers";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup/Signup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Landing />
              <Features />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
