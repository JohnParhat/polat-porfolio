import React from 'react';
import { Work, Footer, Header, Skills, About, Testimonial } from './container';
import { Navbar } from './components/index';
import './App.scss';
const App = () => {
  return (
    <div className='app'>
      {/* <Navbar /> */}
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
