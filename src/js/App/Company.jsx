import React from 'react';
import { Row, Item} from 'react-plan';

const strings = {
section:'会社概要',
title1:<span>育成、投資、飛躍。</span>,
title2:<span>あなたのイノベーション、<br/>応援します。</span>,
paragraph1:'エンジェルズインクは、日本、そしてアジア諸国から世界を変える起業家を育成・支援することを目的とした、エンジェル投資型サービス企業です。',
paragraph2:'スタートアップ企業がつまずくことなく、成長するために必要なもの。それは資金提供だけではありません。持続的成長を促すための知識・ノウハウ・仕組みづくり・人脈形成など、様々な要素が必要不可欠であると私たちは考えます。',
paragraph3:'エンジェルズインクでは、ファイナンス、マネジメント、マーケティング、ブランディング、テクノロジー、クリエイティブなど、幅広い分野の経験豊富なエキスパートたちをチームに迎えて、皆様の成功実現をサポートします。',
paragraph4:'理想的なスタートアップ企業と投資家の関係。それは、新たなエンゲージメントを確立し、企業とエンジェル投資家が持続的なコミットメントと支援を互いに約束し、共に成長することです。それを実現することは、日本の起業家とエンジェル投資家を増やし、日本経済を活性化していくことにつながります。',
paragraph6:'夢を持つすべての人のために―私たちエンジェルズインクは皆様の成功を全力で応援いたします。',
paragraph7:'Empowering Entrepreneurs',
paragraph8:'すべての方に起業の力を。'
}

export default () => {
  return (
      <Row className="company" id="company">
          <Item size="hide" medium="100%" small="100%" className="artwork">
          </Item>
          <Item size={ 3 } className="content p-b-xxl" medium="100%" small="100%">
            <div className="header m-t-xxl">
              <p> { strings.section }</p>
            </div>
            <hr className="gradient-horizontal m-b-xxl" />
            <div className="header m-b-xl">
              <h1>{ strings.title1 }</h1>
              <h1>{ strings.title2 }</h1>
            </div>
            <p>{ strings.paragraph1 }</p>
            <p>{ strings.paragraph2 }</p>
            <p>{ strings.paragraph3 }</p>
            <p>{ strings.paragraph4 }</p>
            <p>{ strings.paragraph6 }</p>
            <p>
              { strings.paragraph7 }<br />
              { strings.paragraph8 }
            </p>
          </Item>
          <Item size={ 5 } className="artwork">
          </Item>
      </Row>
  );
}