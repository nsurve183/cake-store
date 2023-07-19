

import React from 'react'
import '../scss/titlecomp/title.css'

const TitleComp = () => {
    return (
        <>
            <div className="bg_section">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-7 col-12 mb-md-0 mb-5">
                                        <div className="card bg-transparent text-white border-0">
                                            <div className="card-body">
                                                <h5 className="card-title">Delicious Cakes</h5>
                                                <p className="card-text">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                                                <a href="#" className="btn">Order Now</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-5 col-12">
                                        <img src="/images/slider-img.png" className="img-fluid" alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-7 col-12 mb-md-0 mb-5">
                                        <div className="card bg-transparent text-white border-0">
                                            <div className="card-body">
                                                <h5 className="card-title">Delicious Cakes</h5>
                                                <p className="card-text">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                                                <a href="#" className="btn">Order Now</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-5 col-12">
                                        <img src="/images/slider-img.png" className="img-fluid" alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="container">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-7 col-12 mb-md-0 mb-5">
                                        <div className="card bg-transparent text-white border-0">
                                            <div className="card-body">
                                                <h5 className="card-title">Delicious Cakes</h5>
                                                <p className="card-text">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                                                <a href="#" className="btn">Order Now</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-5 col-12">
                                        <img src="/images/slider-img.png" className="img-fluid" alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TitleComp
