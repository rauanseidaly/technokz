import React from 'react';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.webp'
import img5 from './images/img5.jpg'




export default function Carousel() {


    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ width: "50vw", minWidth: "350px", margin: "auto", height: "50vh", borderRadius: "4rem" }} src={img1} className="d-block" alt="img1" />

                    </div>
                    <div className="carousel-item">
                        <img style={{ width: "50vw", minWidth: "350px", margin: "auto", height: "50vh", borderRadius: "4rem" }} src={img2} className="d-block" alt="img2" />

                    </div>
                    <div className="carousel-item">
                        <img style={{ width: "50vw", minWidth: "350px", margin: "auto", height: "50vh", borderRadius: "4rem" }} src={img3} className="d-block" alt="img3" />

                    </div>
                    <div className="carousel-item">
                        <img style={{ width: "50vw", minWidth: "350px", margin: "auto", height: "50vh", borderRadius: "4rem" }} src={img4} className="d-block" alt="img4" />
                        <div className="carousel-caption d-md-block">
                            <h5><em>50% off on branded Samsung Watches</em></h5>
                            <p>Best offer of this season</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{ width: "50vw", minWidth: "350px", margin: "auto", height: "50vh", borderRadius: "4rem" }} src={img5} className="d-block" alt="img5" />

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span style={{ filter: "brightness(0)" }} className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span style={{ filter: "brightness(0)" }} className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );

}