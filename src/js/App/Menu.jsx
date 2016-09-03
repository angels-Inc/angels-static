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
    console.log(e.target.name);
    e.preventDefault();
    props.scroll(e.target.name);
  }
  return (
      <Row className="menu" small="hide">
        <Row className="container" align="center">
          <Item size={ 1 }>
            <img src={ require('../../image/logo_white.png')} alt="Angels Inc Logo"/>
          </Item>
          <Item size={ 1 } large={ 2 } medium={ 3 } small={ 1 }>
            <Row align="center" justify="space-between">
              <Item small="hide">
                <a name="company" href="" onClick={ handleScroll.bind(this) }>{ strings.menu1 }</a>
              </Item>
              <Item small="hide">
                <a name="service" href="" onClick={ handleScroll.bind(this) }>{ strings.menu2 }</a>
              </Item>
              <Item small="hide">
                <a href="">{ strings.menu3 }</a>
              </Item>
              <Item small="hide">
                <a href="">{ strings.menu4 }</a>
              </Item>
              <Item>
                <button className="white">{ strings.menu5 }</button>
              </Item>
            </Row>
          </Item>
        </Row>
      </Row>
  );
}