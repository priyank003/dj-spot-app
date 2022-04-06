import { Navbar } from "./shared/components";
import { Landing, Features } from "./pages/Home/containers";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Features />
    </div>
  );
}

export default App;
