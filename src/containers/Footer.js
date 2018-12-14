import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import FooterScss from '../containers/_Footer.scss';
import facebook from './images/sns_facebook.png';
import instagram from './images/sns_instagram.png';

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="footer-div">
            <div className="footer-container">
              <Link to="/">회사소개</Link>
              <Link to="/">제휴문의</Link>
              <Link to="/">단체구매문의</Link>
              <Link to="/">이메일 무단 수집거부</Link>
              <Link to="/">이용약관</Link>
              <Link to="/">개인정보처리방침</Link>
              <Link to="/">공지사항</Link>
              <p>
                (주)우아한신선들 대표이사 : 최준영 사업자등록번호 : 110-81-97233
                [사업자 정보확인] 통신판매업신고 : 제2015-서울송파-1733호 <br />
                주소 : 서울특별시 송파구 올림픽로 348, 6층(방이동)
                개인정보담당자 : 이화연 이메일 : privacy@baeminchan.com 고객센터
                : 1600-1362 <br />
                고객님의 안전거래를 위해 현금 등으로 결제 시 LG U+의 구매안전
                서비스를 이용하실 수 있습니다. [서비스 가입사실 확인]
              </p>
              <footer>© 2018 ElegantSiblings. All Rights Reserved.</footer>
            </div>
            <div className="sns-container">
              <a href="https://www.instagram.com/baeminchan_official/">
                <img src={instagram} alt="배민찬인스타그램계정" />
              </a>
              <a href="https://www.facebook.com/baeminchanofficial">
                <img src={facebook} alt="배민찬페이스북계정" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
