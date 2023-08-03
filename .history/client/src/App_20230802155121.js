
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/home";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
