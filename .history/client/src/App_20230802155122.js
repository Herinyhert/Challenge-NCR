
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/home";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cuentas/:id" component={AccountDetail} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
