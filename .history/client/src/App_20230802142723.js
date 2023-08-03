import './App.css';
import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Home from './components/home';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
