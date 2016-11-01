import React from 'react';
import { Row, Item} from 'react-plan';

const strings = {
  section: 'サービス',
  title1: '起業家と投資家をつなぐ',
  title2: 'エコシステム',
  sectionTitle11:'異業種交流',
  sectionTitle12:'イベントの開催',
  paragraph1: '起業家が成長するためには、自分のビジネスとは直接関係のない人脈をどれだけ増やせるかが大事だ、とよく言われます。普段、接 \
              する機会のない人々との意見交換は、新しいアイデアや発想の転 \
              換の起爆剤となり得ます。起業家を中心に、企業内で活躍してい \
              る方、支援や投資を希望する方など、多彩なビジネスプロフェッシ \
              ョナルたちが出会い、互いに刺激を受けながらシナジー効果を生 \
              み出す、そんなコミュニティを複数の定例イベントを通して広げて \
              いきます。',
  sectionTitle21:'経験豊富なエキスパート・経営者、',
  sectionTitle22:'エンジェル投資家によるサポート',
  paragraph2: '起業家に必要なのは、専門知識の習得だけではありません。経験 \
              豊富で信頼の厚い支援者（バッカー）たちの存在は起業家の大き \
              なサポートとなります。エンジェルズインクでは、起業家、エンジ \
              ェル投資家、そして起業家を支援するビジネスプロフェッショナル \
              、トップとしての心得や人脈形成を伝授する経営者が持続的に共 \
              存共栄できる新たな枠組みづくりを、オンラインとオフラインサー \
              ビスの双方で提案していきます。',
  sectionTitle31:'AI技術による起業家と投資家の',
  sectionTitle32:'マッチング提案',
  paragraph3: '会員登録情報などのデータを基に、AI 技術を使った起業家と投 \
              資家のマッチングサービスを提供していきます。これにより、お互 \
              いのニーズにマッチした新たなチャンスと、共存共栄の枠組みが \
              実現します。エンジェル投資家やベンチャーキャピタルにとっても \
              、有望な投資対象先といち早く出会える有益な機会になります。',
  sectionTitle41:'知識・スキルの習得',
  sectionTitle42:'セミナー＆ワークショップの開催',
  paragraph4: '起業を成功させるために習得すべき知識は多岐に渡ります。起業 \
              時の資金調達、マーケティング戦略、会計・財務・法務の基礎知 \
              識、そして、起業後の良質な人材の確保・チームビルディング、製 \
              品・商品・サービスなどの高付加価値化、事業の拡大などの専門 \
              知識の習得は事業を成功させる上での重要な伴となります。エン \
              ジェルズインクでは、各領域において経験豊富な講師陣による入 \
              門セミナーと、より専門的な知識・スキルの習得を目指したワーク \
              ショップを開催します。また、エンジェル投資家になるための知識 \
              や心構えなど、起業家に限定されない有益な情報セミナーもご用 \
              意しています。',
  sectionTitle51:'オンラインプラットフォーム・',
  sectionTitle52:'クラウドファンディングの構築',
  paragraph5: '弊社が独自開発したオンラインプラットフォームでは、無料会員お \
              よび有料会員に向けて、有益な情報やイベント、セミナーの情報を \
              発信しています。その他にも、会員用のマーケットプレイス機能、 \
              コミュニティづくりや情報交換用のフォーラムなどのネットワーキ \
              ング機能などをご利用いただけます。また、現在エンジェルズイン \
              クでは、起業家たちの支援およびスタートアップ企業の活性化を \
              目的とした、クラウドファンディングを構築中です。（2017 年サー \
              ビスイン予定）'
}

export default () => {
  return (
    <Row className="service" id="service">
        <Item size={ 1 } className="content m-b-xxl" small="100%" medium="100%">
          <div className="header m-t-xxl">
            <p className="m-t-xxl">{ strings.section }</p>
          </div>
          <hr className="gradient-horizontal m-b-xxl" />
          <div className="header m-b-xl">
            <h1>{ strings.title1 }</h1>
            <h1>{ strings.title2 }</h1>
          </div>
          <Row>
            <Item size={ 1 } small="100%" className="col-l">
              <div className="m-t m-b-xxl">
                <h4>
                  { strings.sectionTitle11} <br />
                  { strings.sectionTitle12}
                </h4>
                <p>
                  {strings.paragraph1 }
                </p>
              </div>
              <div className="m-t m-b-xxl">
                <h4>
                  { strings.sectionTitle21} <br />
                  { strings.sectionTitle22}
                </h4>
                <p>
                  {strings.paragraph2 }
                </p>
              </div>
              <div className="m-t m-b-xxl">
                <h4>
                  { strings.sectionTitle31} <br />
                  { strings.sectionTitle32}
                </h4>
                <p>
                  {strings.paragraph3 }
                </p>
              </div>
            </Item>
            <Item size={ 1 } small="100%" className="col-r">
              <div className="m-t m-b-xxl">
                <h4>
                  { strings.sectionTitle41} <br />
                  { strings.sectionTitle42}
                </h4>
                <p>
                  {strings.paragraph4 }
                </p>
              </div>
              <div className="m-t m-b-xxl">
                <h4>
                  { strings.sectionTitle51} <br />
                  { strings.sectionTitle52}
                </h4>
                <p>
                  {strings.paragraph5 }
                </p>
              </div>
            </Item>
          </Row>
        </Item>
    </Row>
  );
}