import MovieDetail from "./pages/MovieDetail/MovieDetail";
import "./App.module.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
