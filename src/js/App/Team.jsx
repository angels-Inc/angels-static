import React from 'react';
import { Row, Column, Item} from 'react-plan';

const strings = {
  section: 'チーム',
  title1: '経験・実績ともに豊かなチームが',
  title2: 'あなたと投資家を繋げます。',
  intro: '各分野で様々な経験を培った３人のコアメンバーとアドバイザリーボードメンバーによってグローバル規模での事業を活性化させていきます。',
  titleBoard: 'コアメンバー',
  advisoryBoard: 'アドバイザリーボードメンバー',
  board: [
    {
      name: 'ドゥゲスト・ジャック',
      title: '代表取締役CEO',
      image: require('../../image/team/01_AngelsInc-Team-Jacques-min.png'),
      description: <div>
        <p>ITディレクターとCFOの職歴を持つエンジェル投資家。シードステージのスタートアップ企業の支援を行っている。MBA(経営学修士)及びLLM（法学修士）日本在住15年目。</p>
      </div>
    },
    {
      name: '島田 千草',
      title: '取締役COO',
      image: require('../../image/team/02_AngelsInc-Team-Chigusa-min.png'),
      description: <div>
        <p>1996年パリにて最初の起業。20年以上に亘り企業の海外進出をサポート。企業のグローバルブランド開発も数多く手掛ける。中央大学法学部法律学科卒。日英仏のトリリンガル。</p>
      </div>
    },
    {
      name: 'ディドロン・フロリアン',
      title: '取締役CTO',
      image: require('../../image/team/03_AngelsInc-Team-Florian-min.png'),
      description: <div>
        <p>欧米大手企業にてITシステム構築の豊富な経験を持つアントレプレナー。2011年より東京にて最新のWeb技術を企業へ導入する111Studio社を設立。日本在住７年目。</p>
      </div>
    }
  ],
  advisory: [
    {
      name: '斎藤忠久',
      title: '',
      image: require('../../image/team/04_AngelsInc-Team-Saito-min.png'),
      description: <div>
        <p>グロービス経営大学院およびマネジメントスクール専任教員。ファイナンス全般が専門。</p>
      </div>
    },{
      name: '内藤 慧人',
      title: '',
      image: require('../../image/team/05_AngelsInc-Team-Naito-min.png'),
      description: <div>
        <p>グローバルエグゼクティブ、米国弁護士。コーポレートガバナンス・企業統治の専門家。</p>
      </div>
    },{
      name: 'ルベンス・ネイル',
      title: '',
      image: require('../../image/team/06_AngelsInc-Team-Neil-min.png'),
      description: <div>
        <p>東京工業大学にて機械学習専攻の工学博士(PhD)。AI技術の専門家。</p>
      </div>
    },{
      name: 'スレスタ・スディプ・キリスナ',
      title: '',
      image: require('../../image/team/07_AngelsInc-Team-Sudeep-min.png'),
      description: <div>
        <p>コンピュータエンジニア、プロダクト開発。MBA取得。</p>
      </div>
    },{
      name: 'フィルド・ロレンス',
      title: '',
      image: require('../../image/team/08_AngelsInc-Team-Lawrence-min.png'),
      description: <div>
        <p>金融系情報セキュリティの専門家。</p>
      </div>
    }
  ],
  menu5: 'メルマガ登録'
}

export default class Team extends React.Component {

  constructor() {
    super();
  }

  renderMembers(members) {
    return members.map( (member, idx) => {
      return (
        <Item size="33.33333333333339%" small="100%" className="member" key={ idx }>
          <img src={ member.image } alt={ member.name }/>
          <h2 className="name">{ member.name }</h2>
          <p className="title">{ member.title }</p>
          <div className="m-t-xl">
            { member.description }
          </div>
        </Item>
      );
    });
  }

  render() {
    return (
        <Row className="team" id="team">
          <Column className="header" size="100%">
            <Item>
              <p> { strings.section } </p>
              <hr className="gradient-horizontal" />
            </Item>
          </Column>
          <Row size="100%" className="header m-t-xxl">
            <Item size={ 2 } small="100%">
              <h1>{ strings.title1 }</h1>
              <h1>{ strings.title2 }</h1>
            </Item>
            <Item size={ 1 } small="100%" className="intro">
              <h2>{ strings.intro }</h2>
            </Item>
          </Row>
          <Column size="100%" className="m-t-xxl">
            <Item>
              <p> { strings.titleBoard } </p>
              <hr className="gradient-horizontal" />
            </Item>
          </Column>
          <Row size="100%" className="m-t-xl member-list">
            { this.renderMembers(strings.board) }
          </Row>
          <Column size="100%" className="m-t-xxl">
            <Item>
              <p> { strings.advisoryBoard } </p>
              <hr className="gradient-horizontal" />
            </Item>
          </Column>
          <Row size="100%" className="m-t-xl member-list">
            { this.renderMembers(strings.advisory) }
          </Row>
        </Row>
    );
  }
}
