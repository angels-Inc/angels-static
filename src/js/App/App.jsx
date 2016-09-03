import React from 'react';
import Button from './common/Button.jsx';
import { Viewport } from 'react-plan';
import Hero from './Hero.jsx';
import Menu from './Menu.jsx';
import MenuMobile from './MenuMobile.jsx';
import Company from './Company.jsx';
import Service from './Service.jsx';
import Breaker from './Breaker.jsx';
import Team from './Team.jsx';
import zenscroll from 'zenscroll';

class App extends React.Component {

  scrollTo = (selector) => {
    const el = document.getElementById(selector);
    zenscroll.to(el);
  }

  render() {
    return (
      <div className="m-b-xxl" >
        <Menu scroll={ this.scrollTo }/>
        <MenuMobile scroll={ this.scrollTo }/>
        <Hero scroll={ this.scrollTo }/>
        <Company />
        <Service />
        <Breaker />
        <Team />
      </div>
    );
  }
}

export default App;