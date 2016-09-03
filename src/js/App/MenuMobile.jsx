import React from 'react';
import { Row, Item } from 'react-plan';

const strings = {
  menu1: '会社概要',
  menu2: 'サービス',
  menu3: 'チーム',
  menu4: 'お問い合わせ',
  menu5: 'メルマガ登録',
  social: 'ソーシャル'
}

export default class Menu extends React.Component {

  constructor() {
    super();
    this.state = {opened: false};
  }

  handleClick = () => {
    this.setState({
      opened: !this.state.opened
    });
  }

  handleScroll = (e, selector) => {
    e.preventDefault();
    this.props.scroll(e.target.name);
    this.setState({opened: false});
  }

  render() {
    const buttonClass = (this.state.opened) ? 'hamburger hamburger--slider is-active' : 'hamburger hamburger--slider';
    const overlayClass = (this.state.opened) ? 'overlay opened' : 'overlay';
    return (
      <Row className="menu-mobile" wide="hide" large="hide" medium="hide" small={ 1 }>
        <div className={ overlayClass }>
          <h1>
            <a name="company" href="" onClick={ this.handleScroll.bind(this) }>{ strings.menu1 }</a>
          </h1>
          <h1>
            <a name="service" href="" onClick={ this.handleScroll.bind(this) }>{ strings.menu2 }</a>
          </h1>
          <h1>
            <a name="team" href="" onClick={ this.handleScroll.bind(this) }>{ strings.menu3 }</a>
          </h1>
          <h1>
            <a name="contact" href="" onClick={ this.handleScroll.bind(this) }>{ strings.menu4 }</a>
          </h1>
          <h1>
            <a href="#">{ strings.menu5 }</a>
          </h1>
          <h2>{ strings.social }</h2>
          <Row justify="space-around">
            <Item>
              <img src={ require('../../image/instagram.png') } alt="Instagram"/>
            </Item>
            <Item>
              <img src={ require('../../image/facebook.png') } alt="Facebook"/>
            </Item>
            <Item>
              <img src={ require('../../image/twitter.png') } alt="Twitter"/>
            </Item>
            <Item>
              <img src={ require('../../image/linkedin.png') } alt="LinkedIn"/>
            </Item>
          </Row>
        </div>
        <Row align="center" className="content" justify="space-between">
          <Item size={ 1 }>
            <img src={ require('../../image/logo.png')} alt="Angels Inc Logo"/>
          </Item>
          <Item size={ 1 } className="button-container">
            <span className={ buttonClass } type="button" onClick={ this.handleClick }>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </span>
          </Item>
        </Row>
      </Row>
    );
  }
}