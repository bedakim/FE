import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Collapse } from './Collapse';
import { Table } from 'reactstrap';

export default class DetailGeneralInformation extends Component {
  render() {
    return (
      <ScrollableAnchor id={'section3'} activeTab={this.props.activeTab}>
        <section className="detail-section">
          <Collapse title="배민찬 새벽배송 지역안내">
            <p className="heading-bt-txt">
              [서울/경기/인천 새벽배송, 새벽배송 불가 지역은 '안전신선택배'로
              전국배송]
            </p>
            <ul className="delivery-cate">
              <li className="c1">
                <span>&nbsp;</span>
                새벽배송 가능 지역
              </li>
              <li className="c2">
                <span>&nbsp;</span>
                배송불가 지역
              </li>
            </ul>
            <Table className="table-delivery" size="sm">
              <thead />
              <tbody>
                <tr>
                  <th colSpan="2">서울특별시</th>
                  <td>-</td>
                  <td>&nbsp;</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <th rowSpan="48">경기도</th>
                  <th>구리시</th>
                  <td>-</td>
                  <td className="c2">불가능</td>
                  <td className="c2">전 지역</td>
                </tr>
                <tr>
                  <th>부천시</th>
                  <td>-</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <th rowSpan="2">시흥시</th>
                  <td rowSpan="2">-</td>
                  <td>가능</td>
                  <td>
                    대야동, 계수동, 신천동, 방산동, 포동, 미산동, 은행동,
                    안현동, 매화동, 도창동, 금이동, 목감동, 물왕동, 산현동,
                    조남동, 논곡동, 군자동, 거모동, 월곶동, 정왕동, 죽율동,
                    무지내동, 하중동, 하상동, 광동, 장현동, 장곡동, 능곡동,
                    화정동
                  </td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">과림동</td>
                </tr>
                <tr>
                  <th rowSpan="3">안산시</th>
                  <td>상록구</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <td rowSpan="2">단원구</td>
                  <td>가능</td>
                  <td>와동, 고잔동, 신길동, 원곡동, 초지동, 선부동, 화정동</td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">
                    대부동동, 대부남동, 대부북동, 선감동, 목내동, 성곡동,
                    원시동, 풍도동
                  </td>
                </tr>
                <tr>
                  <th>안양시</th>
                  <td>-</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <th>의정부시</th>
                  <td>-</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <th rowSpan="6">고양시</th>
                  <td rowSpan="2">덕양구</td>
                  <td>가능</td>
                  <td>
                    강매동, 주교동, 성사동, 대자동, 토당동, 내곡동, 대장동,
                    원당동, 신평동, 능곡동, 삼송동, 동산동, 현천동, 덕은동,
                    화정동, 향동동, 행신동, 행주동
                  </td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">
                    신원동, 원흥동, 도내동, 북한동, 효자동, 지축동, 오금동,
                    용두동, 벽제동, 선유동, 고양동, 관산동, 화전동, 내유동,
                    원신동, 흥도동, 신도동, 창릉동
                  </td>
                </tr>
                <tr>
                  <td rowSpan="2">일산동구</td>
                  <td>가능</td>
                  <td>
                    식사동, 중산동, 정발산동, 장항동, 마두동, 백석동, 풍동,
                    풍산동
                  </td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">
                    사리현동, 지영동, 설문동, 문봉동, 성석동, 고봉동
                  </td>
                </tr>
                <tr>
                  <td rowSpan="2">일산서구</td>
                  <td>가능</td>
                  <td>일산동, 주엽동, 탄현동, 대화동, 송포동, 덕이동</td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">구산동, 법곳동, 송산동, 가좌동</td>
                </tr>
                <tr>
                  <th rowSpan="2">과천시</th>
                  <td>-</td>
                  <td>가능</td>
                  <td>
                    별양동, 부림동, 원문동, 중앙동, 갈현동, 과천동, 주암동
                  </td>
                </tr>
                <tr>
                  <td>-</td>
                  <td className="c2">불가능</td>
                  <td className="c2">관문동, 문원동, 막계동</td>
                </tr>
                <tr>
                  <th rowSpan="2">광명시</th>
                  <td>-</td>
                  <td>가능</td>
                  <td>광명동, 철산동, 하안동, 소하동, 일직동</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td className="c2">불가능</td>
                  <td className="c2">노온사동, 가학동, 옥길동</td>
                </tr>
                <tr>
                  <th rowSpan="2">군포시</th>
                  <td rowSpan="2">-</td>
                  <td>가능</td>
                  <td>
                    당동, 당정동, 산본1동, 산본2동, 금정동, 군포1동, 군포2동,
                    재궁동, 오금동, 수리동, 궁내동, 광정동, 부곡동
                  </td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">
                    둔대동, 속달동, 대야미동, 도마교동, 대야동
                  </td>
                </tr>
                <tr>
                  <th rowSpan="2">김포시</th>
                  <td rowSpan="2">-</td>
                  <td>가능</td>
                  <td>
                    양촌읍 양곡리, 구래동, 마산동, 감정동, 풍무동, 운양동,
                    걸포동, 북변동, 사우동, 고촌읍, 장기동
                  </td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">
                    양촌읍 내 양곡리 외 지역, 통진읍, 대곶면, 월곶면, 하성면
                  </td>
                </tr>
                <tr>
                  <th>남양주시</th>
                  <td>-</td>
                  <td className="c2">불가능</td>
                  <td className="c2">전 지역</td>
                </tr>
                <tr>
                  <th rowSpan="6">성남시</th>
                  <td rowSpan="2">분당구</td>
                  <td>가능</td>
                  <td>
                    분당동, 수내동, 정자동, 서현동, 이매동, 야탑동, 금곡동,
                    구미동, 판교동, 삼평동, 백현동, 운중동
                  </td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">
                    동원동, 궁내동, 대장동, 석운동, 하산운동, 율동
                  </td>
                </tr>
                <tr>
                  <td rowSpan="2">수정구</td>
                  <td>가능</td>
                  <td>
                    신흥동, 태평동, 수진동, 단대동, 산성동, 양지동, 복정동,
                    창곡동
                  </td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">
                    신촌동, 오야동, 심곡동, 고등동, 상적동, 둔전동, 시흥동,
                    금토동, 사송동
                  </td>
                </tr>
                <tr>
                  <td rowSpan="2">중원구</td>
                  <td>가능</td>
                  <td>
                    성남동, 중앙동, 금광동, 은행동, 상대원동, 여수동, 도촌동,
                    하대원동
                  </td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">갈현동</td>
                </tr>
                <tr>
                  <th rowSpan="6">수원시</th>
                  <td rowSpan="2">권선구</td>
                  <td>가능</td>
                  <td>
                    세류1동, 세류2동, 세류3동, 권선1동, 권선2동, 곡반정동,
                    서둔동, 탑동, 구운동, 평동, 고색동
                  </td>
                </tr>
                <tr className="c3">
                  <td className="c2">불가능</td>
                  <td className="c2">
                    오목천동, 호매실동, 금곡동, 금호동, 장지동, 대황교동,
                    입북동, 당수동, 평리동
                  </td>
                </tr>
                <tr>
                  <td>영통구</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <td rowSpan="2">장안구</td>
                  <td>가능</td>
                  <td>
                    파장동, 정자동, 이목동, 율전동, 천천동, 영화동, 송죽동,
                    조원동, 연무동, 율천동
                  </td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">상광교동, 하광교동</td>
                </tr>
                <tr>
                  <td>팔달구</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <th rowSpan="5">용인시</th>
                  <td rowSpan="2">기흥구</td>
                  <td>가능</td>
                  <td>
                    보정동, 신갈동, 영덕동, 마북동, 상갈동, 보라동, 구성동,
                    구갈동, 하갈동, 농서동, 서천동, 청덕동, 언남동
                  </td>
                </tr>
                <tr className="c3">
                  <td className="c2">불가능</td>
                  <td className="c2">
                    지곡동, 공세동, 고매동, 기흥동, 상하동, 동백동, 중동
                  </td>
                </tr>
                <tr>
                  <td rowSpan="2">수지구</td>
                  <td>가능</td>
                  <td>죽전동, 동천동, 풍덕천동, 상현동, 신봉동, 성복동</td>
                </tr>
                <tr className="c3">
                  <td className="c2">불가능</td>
                  <td className="c2">고기동</td>
                </tr>
                <tr>
                  <td>처인구</td>
                  <td className="c2">불가능</td>
                  <td className="c2">전 지역</td>
                </tr>
                <tr>
                  <th>의왕시</th>
                  <td>-</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <th rowSpan="2">파주시</th>
                  <td rowSpan="2">-</td>
                  <td>가능</td>
                  <td>
                    운정동, 동패동, 금촌동, 문발동, 와동동, 목동동, 야당동,
                    다율동
                  </td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">
                    아동동, 야동동, 검산동, 맥금동, 교하동, 오도동, 상지석동,
                    산남동, 당하동, 송촌동, 하지석동, 서패동, 신촌동, 연다산동,
                    금릉동, 문산읍, 파주읍, 법원읍, 조리읍, 월롱면, 탄현면,
                    광탄면, 파평면, 적성면, 군내면, 장단면, 진동면, 진서면
                  </td>
                </tr>
                <tr>
                  <th rowSpan="2">하남시</th>
                  <td rowSpan="2">-</td>
                  <td>가능</td>
                  <td>학암동</td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">
                    천현동, 하산곡동, 배알미동, 상산곡동, 당정동, 망월동,
                    미사동, 선동, 감북동, 감일동, 감이동, 교산동, 춘궁동,
                    하사창동, 상사창동, 항동, 초일동, 초이동, 광암동, 신장동,
                    덕풍동, 풍산동, 창우동
                  </td>
                </tr>
                <tr>
                  <th rowSpan="2">화성시</th>
                  <td rowSpan="2">-</td>
                  <td>가능</td>
                  <td>
                    병점동, 능동, 청계동, 영천동, 반송동, 기산동, 반월동,
                    석우동, 오산동
                  </td>
                </tr>
                <tr>
                  <td className="c2">불가능</td>
                  <td className="c2">
                    진안동, 반정동, 황계동, 배양동, 기안동, 송산동, 안녕동,
                    봉담읍, 우정읍, 향남읍, 남양읍, 매송면, 비봉면, 마도면,
                    송산면, 서신면, 팔탄면, 장안면, 양감면, 정남면, 동탄면,
                    기배동, 화산동, 동탄동
                  </td>
                </tr>
                <tr>
                  <th rowSpan="11" colSpan="2">
                    인천광역시
                  </th>
                  <td>동구</td>
                  <td className="c2">불가능</td>
                  <td className="c2">전 지역</td>
                </tr>
                <tr>
                  <td>부평구</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <td>남동구</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <td>연수구</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <td>중구</td>
                  <td className="c2">불가능</td>
                  <td className="c2">전 지역</td>
                </tr>
                <tr>
                  <td>남구</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <td rowSpan="2">계양구</td>
                  <td>가능</td>
                  <td>
                    효성1동, 효성2동, 계산1동, 계산2동, 작전동, 서운동, 임학동,
                    용종동, 병방동, 방축동, 박촌동, 동양동, 귤현동, 장기동
                  </td>
                </tr>
                <tr className="c3">
                  <td className="c2">불가능</td>
                  <td className="c2">
                    상야동, 하야동, 평동, 노오지동, 선주지동, 이화동, 오류동,
                    갈현동, 둑실동, 목상동, 다남동
                  </td>
                </tr>
                <tr>
                  <td>서구</td>
                  <td>가능</td>
                  <td>전 지역</td>
                </tr>
                <tr>
                  <td>강화군</td>
                  <td className="c2">불가능</td>
                  <td className="c2">전 지역</td>
                </tr>
                <tr>
                  <td>옹진군</td>
                  <td className="c2">불가능</td>
                  <td className="c2">전 지역</td>
                </tr>
                <tr>
                  <td colSpan="4" className="c3">
                    그 외 배송불가 지역
                  </td>
                  <td className="c3">
                    가평군, 광주시, 동두천시, 안성시, 양주시, 양평군, 여주시,
                    오산시, 이천시, 포천시, 평택시
                  </td>
                </tr>
              </tbody>
            </Table>
            <p className="delivery-comment">
              더 많은 분들이 새벽배송 서비스를 받으실 수 있도록 최선을
              다하겠습니다!
            </p>
          </Collapse>
          <div className="detail-section exchange">
            <h2 className="product-detail-heading">
              교환/반품 안내{' '}
              <small className="txt">주문 전 꼭! 확인해주세요.</small>
            </h2>
            <h3>배송 완료 전</h3>
            <h4>- 주문 취소 및 변경</h4>
            <dl>
              <dt>[신선식품]</dt>
              <dd>
                상품 수령일 3일 전까지 고객센터, 또는 1:1문의 게시판을 통해
                취소하실 수 있습니다.
                <br />
                <em>
                  단, 상품이 [배송준비중] 상태인 경우 이미 업체에서 재료 수급이
                  완료되어 주문취소 및 수령일 변경이 어렵습니다.
                </em>
                <br /> (배송 주소지 및 연락처는 상품 수령일 1일 전 오후 1시
                전까지 변경 가능)
              </dd>
              <dt>[유통기한 30일 이상의 가공식품]</dt>
              <dd>
                상품 수령일 1일 전 오후 1시 전까지 주문 취소 및 변경 요청이
                가능합니다.
              </dd>
            </dl>
            <h3>배송 완료 후</h3>
            <h4>- 단순변심으로 인한 반품·환불·교환</h4>
            <dl>
              <dt>[신선식품]</dt>
              <dd>
                재판매가 불가능한 제품의 특성 상, 단순 변심으로 인한 반품 및
                교환은 어렵습니다.
              </dd>
              <dt>[유통기한 30일 이상의 가공식품]</dt>
              <dd>
                상품 수령일부터 7일 이내 반품 및 교환 신청이 가능하며, 그로 인한
                배송비가 발생합니다.
              </dd>
            </dl>
            <h4>- 상품에 문제가 있는 경우의 반품·환불·교환</h4>
            <p>
              배민찬에서는 언제나 신선하고 좋은 상품을 제공하기 위해 노력하고
              있으나, 간혹 상품의 문제가 있는 경우 정도에 따라
              부분환불/환불/재배송 처리해드립니다.
              <br /> 상품의 상태를 정확히 확인할 수 있도록 문제가 있는 상품의
              사진을 찍어 교환/반품 게시판에 업로드 부탁드립니다.
              <br /> 단, 신선식품의 경우 수령일로부터 2일 이내에 연락을 주셔야
              확인이 가능하며 명확한 판단이 어려운 사유로 인한 요청은 처리가
              어려울 수 있습니다.
              <br /> (맛, 재료 크기 등 개인적인 기호 및 판단에 따른 반품 및 교환
              요청 등)
            </p>
            <h3>기타</h3>
            <h4>- 미성년자 관련 주의 사항</h4>
            <p>
              만 19세 미만 미성년자가 상품을 구매하는 경우, 법정대리인이
              동의하지 않으면 미성년자 또는 법정대리인이 구매를 취소할 수
              있습니다.
            </p>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}
