import React from 'react';
import { Row, Item } from 'react-plan';

const strings = {
  menu1: '会社概要',
  menu2: 'サービス',
  menu3: 'チーム',
  menu4: 'お問い合わせ',
  menu5: 'メルマガ登録'
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

  render() {
    const buttonClass = (this.state.opened) ? 'hamburger hamburger--slider is-active' : 'hamburger hamburger--slider';
    const overlayClass = (this.state.opened) ? 'overlay opened' : 'overlay';
    return (
      <Row className="menu-mobile" wide="hide" large="hide" medium="hide" small={ 1 }>
        <div className={ overlayClass }>
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