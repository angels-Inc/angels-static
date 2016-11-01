import React from 'react';
import { Row, Item} from 'react-plan';

const strings = {
  header1: 'いっしょに',
  header2: 'たくらみましょう、',
  header3: 'いろいろと。',
  subheader1: '起業家育成セミナー',
  subheader2: '「エクイティストーリー」',
  date: '2016年11月28日（月）',
  cta: '詳細はこちら'
}

export default (props) => {
  return (
      <Row align="center" className="hero">
        <Item size={ 1 } align="center" className="content">
          <h1>{ strings.header1 }</h1>
          <h1>{ strings.header2 }</h1>
          <h1>{ strings.header3 }</h1>
          <h2 className="m-t-xl m-b-xl">{ strings.subheader1 }<br />
              { strings.subheader2 }<br />
          </h2>
          <h1>{ strings.date }</h1>
          <a href="https://app.angels-inc.com" className="m-t-xl button blue">{ strings.cta }</a>
        </Item>
      </Row>
  );
}