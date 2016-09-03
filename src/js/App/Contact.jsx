import React from 'react';
import { Row, Column, Item} from 'react-plan';

const strings = {
  section1: 'メールマガジン',
  section2: 'お問い合わせ',
  registerTitle: 'エンジェルズインクの最新情報をお届けします。',
  registerParagraph: '世界のスタートアップ最新情報、起業に関するノウハウ、投資家とのネットワーキングイベント、セミナー＆ワークショップのご案内などをお届けします。 メールマガジン登録はこちらから！',
  emailParagraph1: 'ご質問等ございましたらお気軽にご連絡ください。',
  emailParagraph2: <p>Email <a href="mailto:hello@angels-inc.com"></a>hello@angels-inc.com</p>
}

export default class Team extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
        <Column className="contact m-t-xl" id="contact">
            <Row>
              <Item size={ 2 } className="register" small="100%">
              <h2>{ strings.section1 }</h2>
              <hr className="gradient-horizontal" />
              <Row className="m-t-xl">
                <Item size={ 1 } small="100%">
                  <h1>{ strings.registerTitle }</h1>
                </Item>
                <Item size={ 1 } small="100%">
                  <p>{ strings.registerParagraph }</p>
                </Item>
              </Row>
              </Item>
              <Item size={ 1 } className="email">
              <h2>{ strings.section2 }</h2>
              <hr className="gradient-horizontal" />
              <div className="m-t-xl">
                <p>{ strings.emailParagraph1 }</p>
                { strings.emailParagraph2 }
              </div>
              </Item>
            </Row>
        </Column>
    );
  }
}