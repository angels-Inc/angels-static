import React from 'react';
import Button from './common/Button.jsx';
import { Viewport } from 'react-plan';
import Hero from './Hero.jsx';
import Menu from './Menu.jsx';
import MenuMobile from './MenuMobile.jsx';
import Company from './Company.jsx';
import Service from './Service.jsx';

const App = () => {
  return (
    <Viewport>
      <Menu />
      <MenuMobile />
      <Hero />
      <Company />
      <Service />
    </Viewport>
  );
}

export default App;