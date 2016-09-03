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

export default (props) => {
  return (
      <Row className="breaker">
        <div className="artwork" />
        <div className="arrow" onClick={ () => props.scroll('company') }>
          <img src={ require('../../image/arrow.png') } alt="Down"/>
        </div>
      </Row>
  );
}