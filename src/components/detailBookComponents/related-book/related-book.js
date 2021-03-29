import React, { Component } from 'react'
import "../related-book/related-book.scss"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
class RelatedBook extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "related-book container">
                    <div className = "row">
                        <div className = "title">
                            <h5>Sản Phẩm Tương Tự</h5>
                        </div>
                        <Carousel slidesPerPage={4} numberOfInfiniteClones={1} 
                                plugins={['autoplay']}>
                            <img src="https://salt.tikicdn.com/cache/w444/ts/product/01/f7/3c/205672aa9052de67cd1d0bb545ad9ba8.png" alt = ""/>
                            <img src= "https://salt.tikicdn.com/cache/w444/ts/product/ff/d3/88/f80afaa2c41549c16103eae11c37a725.png" alt = ""/>
                            <img src= "https://salt.tikicdn.com/cache/w444/ts/product/95/dc/71/b64605feb1d4a4c9dfc425318fb25f5b.png" alt = ""/>
                            <img src="https://salt.tikicdn.com/cache/w444/ts/product/01/f7/3c/205672aa9052de67cd1d0bb545ad9ba8.png" alt = ""/>
                            <img src= "https://salt.tikicdn.com/cache/w444/ts/product/ff/d3/88/f80afaa2c41549c16103eae11c37a725.png" alt = ""/>
                            <img src= "https://salt.tikicdn.com/cache/w444/ts/product/95/dc/71/b64605feb1d4a4c9dfc425318fb25f5b.png" alt = ""/>
                            <img src="https://salt.tikicdn.com/cache/w444/ts/product/01/f7/3c/205672aa9052de67cd1d0bb545ad9ba8.png" alt = ""/>
                            <img src= "https://salt.tikicdn.com/cache/w444/ts/product/ff/d3/88/f80afaa2c41549c16103eae11c37a725.png" alt = ""/>
                            <img src= "https://salt.tikicdn.com/cache/w444/ts/product/95/dc/71/b64605feb1d4a4c9dfc425318fb25f5b.png" alt = ""/>
                        </Carousel>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default RelatedBook;
