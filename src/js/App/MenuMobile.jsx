import React from 'react';
import { Row, Item} from 'react-plan';

const strings = {
  menu1: '会社概要',
  menu2: 'サービス',
  menu3: 'チーム',
  menu4: 'お問い合わせ',
  menu5: 'メルマガ登録'
}

export default () => {
  return (
      <Row className="menu-mobile" wide="hide" large="hide" medium="hide" small={ 1 }>
        <Row>
          <Item size={ 1 }>
            <img src={ require('../../image/logo.png')} alt="Angels Inc Logo"/>
          </Item>
          <Item size={ 1 } large={ 2 } medium={ 3 } small={ 1 }>
            <button className="white">{ strings.menu5 }</button>
          </Item>
        </Row>
      </Row>
  );
}