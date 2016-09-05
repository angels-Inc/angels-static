import React from 'react';
import { Row, Item} from 'react-plan';

const strings = {
  section: '会社概要',
  title1: <span>すべての方に<br/>成功への第一歩を。</span>,
  title2: <span>すべての女性に<br/>起業のチャンスを。</span>,
  paragraph1: <p>私たちは日本やアジアの国々から世界を変える<br/>起業家を育成・支援することを目的としたエンジェル投資型サービス企業です。</p>,
  paragraph2: 'エンジェルズインクではスタートアップ企業がつまずくことなく成長するためには、出資の資金提供に留まらず、持続的成長を促すための知識・ノウハウ・仕組みづくり・人脈形成など様々な要素が必要不可欠であると考えます。',
  paragraph3: 'そこで、ファイナンス・マネジメント・マーケティング・ブランディング・テクノロジー・クリエイティブなど幅広い分野の経験豊富なエキスパートたちをチームに迎えてみなさんの成功の実現に向け尽力いたします。',
  paragraph4: 'また、日本にふさわしいスタートアップ企業と投資家の関係を考えたとき、新たなエンゲージメントの確立によって企業とエンジェル投資家が持続的なコミットメントと支援を互いに約束し共に成長することが、より多くのアントレプレナーとその支援者であるエンジェル投資家を増やしていくことにつながります。',
  paragraph6: '夢をもつすべての方のために、私たちエンジェルズインクはみなさんの成功を全力で応援いたします。',
  paragraph7: 'Empowering Entrepreneurs',
  paragraph8: 'すべての方に起業の力を。'
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
            { strings.paragraph1 }
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