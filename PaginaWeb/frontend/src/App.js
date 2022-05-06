import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

import ContactoPage from "./pages/ContactoPage"
import HomePage from "./pages/HomePage"
import RecomendacionesPage from "./pages/RecomendacionesPage"
import NovedadesPage from "./pages/NovedadesPage"
import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component = {HomePage}/>
        <Route path="/recomendaciones" exact component = {RecomendacionesPage}/>
        <Route path="/novedades" exact component = {NovedadesPage}/>
        <Route path="/contacto" exact component = {ContactoPage}/>
      </Switch>
      <Footer/>
    </Router>    
  );
}

export default App;
