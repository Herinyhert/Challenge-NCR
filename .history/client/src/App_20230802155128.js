
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/home";
import AccountDetail from "./components/home/detail";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cuentas/:id" component={AccountDetailtail} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
