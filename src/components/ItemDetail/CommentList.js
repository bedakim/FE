import React, { Component } from 'react';
import withLoading from '../../hoc/withLoading';
import api from '../../api';

class CommentView extends Component {
  static defaultProps = {
    comment_set: [],
  };
  render() {
    const { comment_set } = this.props;
    console.log('comment_set', comment_set);
    return (
      <div className="review-list">
        {comment_set.map(i => (
          <section className="review-box">
            <div className="left-wrap">
              <div className="star-score-bg">
                <div className="star-score" />
              </div>
              <div className="author">
                <span className="name">{i.nickname}</span>
                <span className="reg-date" />
              </div>
            </div>
            <div className="right-wrap">
              <dl className="field-review" />
              <p className="review-text">{i.content}</p>
              <div className="help">
                <p>후기가 도움이 되셨나요?</p>
                <button className="btn-help-count" />
              </div>
            </div>
          </section>
        ))}
      </div>
    );
  }
}
export default withLoading(CommentView);
