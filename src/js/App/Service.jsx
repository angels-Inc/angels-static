import React from 'react';
import { Row, Item} from 'react-plan';

const strings = {
  section: 'サービス',
  title1: '起業家のための',
  title2: 'エコシステム',
  paragraph1: 'ネットワーキングイベントの開催',
  paragraph2: '知識・スキルの習得セミナー＆ワークショップの開催',
  paragraph3: '経験豊富なエキスパート・企業経営者・エンジェル投資家によるサポート',
  paragraph4: 'オンラインプラットフォーム・クラウドファンディングの構築',
  paragraph5: 'AI技術による起業家と投資家のマッチング提案'
}

export default () => {
  return (
    <Row className="service" id="service">
        <Item size={ 5 } className="artwork" medium="100%" small="100%">
        </Item>
        <Item size={ 3 } className="content m-b-xxl" medium="100%" small="100%">
          <div className="header m-t-xxl">
            <p className="m-t-xxl">{ strings.section }</p>
          </div>
          <hr className="gradient-horizontal m-b-xxl" />
          <div className="header m-b-xl">
            <h1>{ strings.title1 }</h1>
            <h1>{ strings.title2 }</h1>
          </div>
          <p className="m-t-xl">
          ・{ strings.paragraph1 }<br/>
          ・{ strings.paragraph2 }<br/>
          ・{ strings.paragraph3 }<br/>
          ・{ strings.paragraph4 }<br/>
          ・{ strings.paragraph5 }
          </p>
        </Item>
    </Row>
  );
}