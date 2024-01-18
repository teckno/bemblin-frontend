import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Insert from "./Pages/Dashboard";
import Dictionary from "./Pages/Dictionary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="Dictionary" element={<Dictionary />} />
          <Route path="Dashboard" element={<Insert/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));