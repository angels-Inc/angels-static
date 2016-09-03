import React from 'react';
import { Row, Column, Item} from 'react-plan';

const strings = {
  menu1: '会社概要',
  menu2: 'サービス',
  menu3: 'チーム',
  menu4: 'お問い合わせ',
  menu5: 'メルマガ登録',
  social: 'ソーシャル'
}

export default class Footer extends React.Component {

  constructor() {
    super();
  }

  handleScroll = (e, selector) => {
    e.preventDefault();
    this.props.scroll(e.target.name);
  }

  render() {
    return (
      <Row className="footer m-t-xxl m-b-xxl">
        <Item size={ 1 } medium="100%" small="100%">
          <img src={ require('../../image/logo.png')} alt="Angels Inc Logo"/>
        </Item>
        <Item size={ 1 } medium="100%" small="100%">
          <p>
            <a name="company" href="" onClick={ this.handleScroll.bind(this) }>{ strings.menu1 }</a>
          </p>
          <p>
            <a name="service" href="" onClick={ this.handleScroll.bind(this) }>{ strings.menu2 }</a>
          </p>
          <p>
            <a name="team" href="" onClick={ this.handleScroll.bind(this) }>{ strings.menu3 }</a>
          </p>
          <p>
            <a name="contact" href="" onClick={ this.handleScroll.bind(this) }>{ strings.menu4 }</a>
          </p>
          <p>
            <a href="#">{ strings.menu5 }</a>
          </p>
        </Item>
        <Item size={ 1 } medium="100%" small="100%">
          〒102-0082<br/>
          サービス 東京都千代田区一番町4-22<br/>
          チーム プレイアデ一番町601号
          <p className="m-t">
            <a href="mailto:hello@angels-inc.com">hello@angels-inc.com</a>
          </p>
        </Item>

        <Item size={ 1 } medium="100%" small="100%">
          <p>{ strings.social }</p>
          <Row justify="space-around" className="social m-t">
            <Item size={ 1 }>
              <img src={ require('../../image/instagram.png') } alt="Instagram"/>
            </Item>
            <Item size={ 1 }>
              <img src={ require('../../image/facebook.png') } alt="Facebook"/>
            </Item>
            <Item size={ 1 }>
              <img src={ require('../../image/twitter.png') } alt="Twitter"/>
            </Item>
            <Item size={ 1 }>
              <img src={ require('../../image/linkedin.png') } alt="LinkedIn"/>
            </Item>
          </Row>
        </Item>
      </Row>
    );
  }
}