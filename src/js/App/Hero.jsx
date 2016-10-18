import React from 'react';
import { Row, Item} from 'react-plan';

const strings = {
  header1: '育成、投資、飛躍。',
  header2: 'あなたのイノベーション',
  header3: '応援します。',
  subheader1: '私たちは起業家の育成や、スタートアップ企業と',
  subheader2: '投資家を繫ぎ、ビジネスの成功に向けて',
  subheader3: '全面的にサポートをします。'
}

export default (props) => {
  return (
      <Row align="center" className="hero">
        <Item size={ 6 } medium="hide" small="hide"/>
        <Item size={ 5 } align="center" className="content">
          <h1>{ strings.header1 }</h1>
          <h1>{ strings.header2 }</h1>
          <h1>{ strings.header3 }</h1>
          <h2 className="m-t-xl">{ strings.subheader1 }<br />
              { strings.subheader2 }<br />
              { strings.subheader3 }
          </h2>
        </Item>
        <div className="overlay" />
      </Row>
  );
}