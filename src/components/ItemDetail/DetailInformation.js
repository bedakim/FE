import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Collapse } from './Collapse';
import { Table } from 'reactstrap';
import './Collapse.scss';

export default class DetailInformation extends Component {
  render() {
    const { imageTypeD, company, item_name, description } = this.props;
    return (
      <ScrollableAnchor id={'section1'} activeTab={this.props.activeTab}>
        <div>
          <section className="detail-section">
            <div className="detail-img-box">
              {imageTypeD.map(i => (
                <img
                  src={i.photo}
                  alt={i.item_image_pk}
                  key={i.item_image_pk}
                />
              ))}
            </div>
          </section>
          <section className="detail-section">
            <Collapse title="상품정보고시">
              <div className="detail-official-info">
                <h3 className="item-name">
                  [{company}]{item_name}
                </h3>
                <Table className="table-detail-info">
                  <thead />
                  <tbody>
                    <tr>
                      <th scope="row" className="tit">
                        식품의유형
                      </th>
                      <th>{description.item_type}</th>
                    </tr>
                    <tr>
                      <th scope="row" className="tit">
                        생산자 및 소재지(수입품의 경우 수입자를 함께 표기)
                      </th>
                      <th>{description.factory_address}</th>
                    </tr>
                    <tr>
                      <th scope="row" className="tit">
                        제조연월일, 유통기한 또는 품질유지기한
                      </th>
                      <th>{description.dom}</th>
                    </tr>
                    <tr>
                      <th scope="row" className="tit">
                        포장단위별 용량(중량), 수량
                      </th>
                      <th>{description.capacity}</th>
                    </tr>
                    <tr>
                      <th scope="row" className="tit">
                        영양성분
                      </th>
                      <th>해당없음</th>
                    </tr>
                    <tr>
                      <th scope="row" className="tit">
                        유전자재조합식품 여부
                      </th>
                      <th>해당없음</th>
                    </tr>
                    <tr>
                      <th scope="row" className="tit">
                        영유아식 또는 체중조절식품 등에 해당하는 경우
                      </th>
                      <th>해당없음</th>
                    </tr>
                    <tr>
                      <th scope="row" className="tit">
                        수입식품 문구
                      </th>
                      <th>해당없음</th>
                    </tr>
                    <tr>
                      <th scope="row" className="tit">
                        소비자상담 관련 전화번호
                      </th>
                      <th>배민찬 고객센터: 1600-1362</th>
                    </tr>
                    <tr>
                      <th scope="row" className="tit">
                        알레르기 유발물질
                      </th>
                      <th>{description.allergy_material}</th>
                    </tr>
                    <tr>
                      <th scope="row" className="tit">
                        알레르기 주의사항
                      </th>
                      <th>{description.caution}</th>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Collapse>
          </section>
        </div>
      </ScrollableAnchor>
    );
  }
}
