import React, { Component } from "react";
import "../../../../node_modules/react-alice-carousel/lib/scss/alice-carousel.scss"
import AliceCarousel from 'react-alice-carousel';
import '../detail-book-img/detail-book-img.scss'

class BookImg extends Component {
  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1024: {
        items: 1
      }
    };

    return (
      <AliceCarousel
        duration={400}
        autoPlay={false}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div className="book-image">
            <img className="book" src="https://salt.tikicdn.com/cache/w444/ts/product/01/f7/3c/205672aa9052de67cd1d0bb545ad9ba8.png" alt="card" style = {{width: "100%",height: "100%"}}/>
        </div>
        <div className="book-image">
            <img className="book" src="https://salt.tikicdn.com/cache/w444/ts/product/ff/d3/88/f80afaa2c41549c16103eae11c37a725.png" alt="card" style = {{width: "100%",height: "100%"}}/>
        </div>
        <div className="book-image">
            <img className="book" src="https://salt.tikicdn.com/cache/w444/ts/product/95/dc/71/b64605feb1d4a4c9dfc425318fb25f5b.png" alt="card" style = {{width: "100%",height: "100%"}}/>
        </div>
        <div className="book-image">
            <img className="book" src="https://salt.tikicdn.com/cache/w444/ts/product/16/07/9b/33ca887adb023a4f07021e0c6391ba79.png" alt="card" style = {{width: "100%",height: "100%"}}/>
        </div>
      </AliceCarousel>
    );
  }
}
export default BookImg;