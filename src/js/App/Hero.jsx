import React from 'react';
import { Row, Item} from 'react-plan';

const strings = {
  header1: '育成、投資、飛躍。',
  header2: 'あなたのイノベーション',
  header3: '応 援します。',
  subheader1: '私たちは起業家の育成や、スタートアップ企業と',
  subheader2: '投資家を繫ぎ、ビジネスの成功に向けて',
  subheader3: '全面的にサポートをします。'
}

export default () => {
  return (
      <Row align="center" className="hero">
        <Row className="container">
          <Item size={ 2 } medium={ 1 } small="hide"/>
          <Item size={ 1 } align="center">
            <h1>{ strings.header1 }</h1>
            <h1>{ strings.header2 }</h1>
            <h1>{ strings.header3 }</h1>
            <p className="m-t-xl">{ strings.subheader1 }<br />
               { strings.subheader2 }<br />
               { strings.subheader3 }
            </p>
          </Item>
        </Row>
        <div className="overlay" />
      </Row>
  );
}