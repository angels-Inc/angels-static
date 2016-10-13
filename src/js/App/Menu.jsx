import React from 'react';
import { Row, Item} from 'react-plan';

const strings = {
  menu1: '会社概要',
  menu2: 'サービス',
  menu3: 'チーム',
  menu4: 'お問い合わせ',
  menu5: 'メルマガ登録'
}

export default (props) => {
  const handleScroll = (e, selector) => {
    e.preventDefault();
    props.scroll(e.target.name);
  }
  return (
      <Row className="menu" small="hide" align="center">
          <Item size={ 1 }>
            <img src={ require('../../image/logo.png')} alt="Angels Inc Logo"/>
          </Item>
          <Item size={ 1 } large={ 2 } medium={ 3 } small={ 1 }>
            <Row align="center" justify="space-between">
              <Item>
                <a name="company" href="" onClick={ handleScroll.bind(this) }>{ strings.menu1 }</a>
              </Item>
              <Item>
                <a name="service" href="" onClick={ handleScroll.bind(this) }>{ strings.menu2 }</a>
              </Item>
              <Item>
                 <a name="team" href="" onClick={ handleScroll.bind(this) }>{ strings.menu3 }</a>
              </Item>
              <Item>
                 <a name="contact" href="" onClick={ handleScroll.bind(this) }>{ strings.menu4 }</a>
              </Item>
              <Item>
                <a href="https://app.angels-inc.com" className="button blue">{ strings.menu5 }</a>
              </Item>
            </Row>
          </Item>
      </Row>
  );
}