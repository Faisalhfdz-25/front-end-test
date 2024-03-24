import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListView from './views/ListView';
import DetailView from './views/DetailView';
import './App.css';
import { FooterComponent } from './views/Footer';
import { HeaderComponent } from './views/Header';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <main>
          <Routes>
            <Route  path="/" element={<ListView/>} />
            <Route path="/article/:id" element={<DetailView />} />
          </Routes>
        </main>
        <FooterComponent  />
      </div>
    </Router>
  );
};

export default App;
