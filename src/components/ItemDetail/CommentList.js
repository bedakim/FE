import React, { Component } from 'react';
import withLoading from '../../hoc/withLoading';

class CommentView extends Component {
  render() {
    return (
      <div className="review-list">
        <section className="review-box">
          <div className="left-wrap">
            <div className="star-score-bg">
              <div className="star-score" />
            </div>
            <div className="author">
              <span className="name">nickname</span>
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
      </div>
    );
  }
}
export default withLoading(CommentView);
