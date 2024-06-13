import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DashboardPage from "./Pages/Dashboard";
import Dictionary from "./Pages/Dictionary";
import Search from "./Pages/Search";
import TranslationSearch from './Pages/Translations';
import PaymentGateway from './Pages/Payments';
import SignUpPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import PortalPage from './Pages/Portal';
import Community from './Pages/Community';
import Developers from './Pages/Developers';
import Games from './Pages/Games';
import Payment from './Pages/Donate';
import MTN from './Pages/MTN';
import AI from './Pages/ai';
import AboutUs from './Pages/AboutUs';  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="Portal" element={<PortalPage />} />
          <Route path="Community" element={<Community />} />
          <Route path="Dictionary" element={<Dictionary />} />
          <Route path="Signup" element={<SignUpPage />} />
          <Route path="Dashboard" element={<DashboardPage />} />
          <Route path="Payments" element={<PaymentGateway />} />
          <Route path="Search" element={<Search />} />
          <Route path="Translations" element={<TranslationSearch />} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="Developers" element={<Developers />} />
          <Route path="Games" element={<Games />} />
          <Route path="Donate" element={<Payment />} />
          <Route path="MTN" element={<MTN />} />
          <Route path="AI" element={<AI />} />
          <Route path="AboutUs" element={<AboutUs />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));