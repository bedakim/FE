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
import CommentList from './CommentList';

export default class DetailOpinionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      content: '',
    };
    this.toggle = this.toggle.bind(this);
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value,
    });
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    const { content } = this.state;
    const { item_pk, comment_set } = this.props;
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
                  <strong>{comment_set.length}</strong> 개의 상품후기가
                  있습니다.
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
                    className="review-modal"
                  >
                    <ModalHeader
                      toggle={this.toggle}
                      className="review-modal-title"
                    >
                      후기 작성
                    </ModalHeader>
                    <ModalBody className="review-modal-content">
                      <Form>
                        <FormGroup>
                          <Label for="exampleText" className="label">
                            내용 입력
                          </Label>
                          <Input
                            type="textarea"
                            name="text"
                            id="exampleText"
                            cols="30"
                            rows="10"
                            defaultValue={this.state.content}
                            onChange={e => this.handleContentChange(e)}
                          />
                        </FormGroup>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        className="btn-review-add"
                        onClick={e => {
                          e.preventDefault();
                          this.props.onCreateComment(item_pk, content);
                        }}
                      >
                        등록하기
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
              <CommentList key={comment_set.length} comment_set={comment_set} />
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}
