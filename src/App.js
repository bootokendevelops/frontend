import React from 'react';
import Roadmap from './components/Roadmap';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Tokenomics from './components/Tokenomics';
import About from './components/About';
import Community from "./components/Community";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Tokenomics />
      <Roadmap />
      <Community/>
    </>
  );
}

export default App;
