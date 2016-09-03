import React from 'react';
import { Row, Item} from 'react-plan';

const strings = {
  section: '会社概要',
  title1: 'すべての方に 成功への第一歩を。',
  title2: 'すべての女性に起業のチャンスを',
  paragraph1: '私たちは日本やアジアの国々から世界を変える起業家を育成・支援することを目的としたエンジェル投資型サービス企業です。',
  paragraph2: 'エンジェルズインクではスタートアップ企業がつまずくことなく成長するためには、出資の資金提供に留まらず、持続的成長を促すための知識・ノウハウ・仕組みづくり・人脈形成など様々な要素が必要不可欠であると考えます。',
  paragraph3: 'そこで、ファイナンス・マネジメント・マーケティング・ブランディング・テクノロジー・クリエイティブなど幅広い分野の経験豊富なエキスパートたちをチームに迎えてみなさんの成功の実現に向け尽力いたします。',
  paragraph4: 'また、日本にふさわしいスタートアップ企業と投資家の関係を',
  paragraph5: '考えたとき、新たなエンゲージメントの確立によって企業とエンジェル投資家が持続的なコミットメントと支援を互いに約束し共に成長することが、より多くのアントレプレナーとその支援者であるエンジェル投資家を増やしていくことにつながります。',
  paragraph6: '夢をもつすべての方のために、私たちエンジェルズインクはみなさんの成功を全力で応援いたします。',
  paragraph7: 'Empowering Entrepreneurs',
  paragraph8: 'すべての方に起業の力を。'
}

export default () => {
  return (
      <Row className="company">
        <Row className="container-p-none">
          <Item size="hide" medium="100%" small="100%" className="artwork">
          </Item>
          <Item size={ 3 } className="content p-b-xxl" medium="100%" small="100%">
            <div className="header">
              <p className="m-t-xxl m-b-xl">{ strings.section }</p>
              <h2>{ strings.title1 }</h2>
              <h2>{ strings.title2 }</h2>
            </div>
            <hr className="gradient-horizontal" />
            <p>{ strings.paragraph1 }</p>
            <p>{ strings.paragraph2 }</p>
            <p>{ strings.paragraph3 }</p>
            <p>{ strings.paragraph4 }</p>
            <p>{ strings.paragraph5 }</p>
            <p>{ strings.paragraph6 }</p>
            <p>
              { strings.paragraph7 }<br />
              { strings.paragraph8 }
            </p>
          </Item>
          <Item size={ 5 } className="artwork">
          </Item>
        </Row>
      </Row>
  );
}