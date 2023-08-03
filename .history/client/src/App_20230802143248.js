import "./App.module.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
