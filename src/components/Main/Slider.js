import React, { Component } from 'react';
import Slide from '../../containers/Slide';
import LeftArrow from '../../containers/LeftArrow';
import RightArrow from '../../containers/RightArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'https://s3.ap-northeast-2.amazonaws.com/wps-9th-chajeehyung-practice/media/items/main_banner_01.jpg',
        'https://s3.ap-northeast-2.amazonaws.com/wps-9th-chajeehyung-practice/media/items/main_banner_02.jpg',
        'https://s3.ap-northeast-2.amazonaws.com/wps-9th-chajeehyung-practice/media/items/main_banner_04.jpg',
        'https://s3.ap-northeast-2.amazonaws.com/wps-9th-chajeehyung-practice/media/items/main_banner_05.jpg',
        'https://s3.ap-northeast-2.amazonaws.com/wps-9th-chajeehyung-practice/media/items/main_banner_06.jpg',
        'https://s3.ap-northeast-2.amazonaws.com/wps-9th-chajeehyung-practice/media/items/main_banner_07.jpg',
      ],
      currentIndex: 0,
    };
  }

  async componentDidMount() {
    this.timerId = setInterval(() => {
      this.goToNextSlide();
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      this.setState(prevState => ({
        currentIndex: this.state.images.length - 1,
      }));
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }));
    }
  };

  goToNextSlide = () => {
    if (this.state.images.length - 1 === this.state.currentIndex) {
      this.setState({
        currentIndex: 0,
      });
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }));
    }
  };

  render() {
    const translateValue =
      this.state.currentIndex * document.body.clientWidth * -1;
    return (
      <div className="slider">
        <div
          className="slider__wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />

        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}
