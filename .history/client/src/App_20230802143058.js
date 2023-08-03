import MovieDetail from "./pages/MovieDetail/MovieDetail";
import  "./App.module.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/movies/:movieId" element={<MovieDetail />} />
          <Route exact path="/user/" element={<SigIn />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
