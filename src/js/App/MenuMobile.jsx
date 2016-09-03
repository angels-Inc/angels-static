import React from 'react';
import { Row, Column} from 'react-plan';

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
    return (
      <Row className="menu-mobile" wide="hide" large="hide" medium="hide" small={ 1 }>
        <Row align="center" justify="space-between">
          <Column size={ 1 }>
            <img src={ require('../../image/logo.png')} alt="Angels Inc Logo"/>
          </Column>
          <Column size={ 1 } large={ 2 } medium={ 3 } small={ 1 }>
            <span className={ buttonClass } type="button" onClick={ this.handleClick }>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </span>
          </Column>
        </Row>
      </Row>
    );
  }
}