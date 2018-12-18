import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './DetailOpinion.scss';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export default class DetailOpinionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    const { item_pk, content, nickname } = this.props;
    return (
      <ScrollableAnchor id={'section2'}>
        <div className="detail-section">
          <div className="opinion">
            <h2 className="product-detail-heading community">후기</h2>
            <div className="detail-review">
              <div className="review-average">
                <div className="review-score-box">
                  <div className="score-bg">
                    <div className="star-score" />
                  </div>
                  <p className="review-score">
                    <strong>4.1</strong> / 5.0
                  </p>
                </div>
                <p className="review-count">
                  <strong /> 개의 상품후기가 있습니다.
                </p>
                <ul className="field-survey-box">
                  <li>
                    <div className="field-title">맛</div>
                    <div className="field-average">맛있어요</div>
                  </li>
                  <li>
                    <div className="field-title">양</div>
                    <div className="field-average">적당해요</div>
                  </li>
                  <li>
                    <div className="field-title">가격</div>
                    <div className="field-average">적당해요</div>
                  </li>
                </ul>
              </div>
              <div className="review-list-top">
                <div className="right-wrap">
                  <span>
                    일반후기
                    <strong>50P</strong>, 포토후기
                    <strong>100P</strong>지급
                  </span>
                  <button
                    className="btn-review-writ btn-mint "
                    onClick={this.toggle}
                  >
                    상품 후기 작성
                  </button>
                  <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                  >
                    <ModalHeader toggle={this.toggle}>후기 작성</ModalHeader>
                    <ModalBody>
                      <Form>
                        <FormGroup>
                          <Label for="exampleText">내용 입력</Label>
                          <Input
                            type="textarea"
                            name="text"
                            id="exampleText"
                            cols="30"
                            rows="10"
                          />
                        </FormGroup>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="primary"
                        onClick={e => {
                          e.preventDefault();
                          //   this.toggle;
                          this.props.onCreateComment(
                            item_pk,
                            content,
                            nickname
                          );
                        }}
                      >
                        등록하기
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
              {/* <div className="review-list">
                <section className="review-box">
                  <div className="left-wrap">
                    <div className="star-score-bg">
                      <div className="star-score" />
                    </div>
                    <div className="author">
                      <span className="name" />
                      <span className="reg-date" />
                    </div>
                  </div>
                  <div className="right-wrap">
                    <dl className="field-review" />
                    <p className="review-text" />
                    <div className="help">
                      <p>후기가 도움이 되셨나요?</p>
                      <button className="btn-help-count" />
                    </div>
                  </div>
                </section>
              </div> */}
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}
