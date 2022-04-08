import { Navbar } from "./shared/components";
import { Landing, Features } from "./pages/Home/containers";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import View1 from "./pages/Signup/containers/view1/View1";
import View2 from "./pages/Signup/containers/view2/View2";
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
        <Route path="signup" element={<Signup />}>
          <Route path="" element={<View1 />} />
          <Route path="view2" element={<View2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
