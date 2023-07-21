

import React from 'react'
import '../scss/views/views.css'

const Views = () => {
    return (
        <>
            <div className="viewsection mt-3 mb-0 ">
            <h5 className='reply_title text-center mb-0'>What Says Our Customers</h5>
                <div id="rotating_photos" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#rotating_photos" data-bs-slide-to="0" className=" bg-danger active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" className='bg-danger' data-bs-target="#rotating_photos" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-md-6 col-12 mb-md-0 mb-3">
                                        <div className="card bg-transparent text-white p-3">
                                            <div className="card-body">
                                                <p className="card-text text-muted">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                                                <h5 className="card-text text-muted">Kaira Smith</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 mb-md-0 mb-3">
                                        <div className="card bg-transparent text-white p-3">
                                            <div className="card-body">
                                                <p className="card-text text-muted">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                                                <h5 className="card-text  text-muted">Kaira Smith</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-md-6 col-12 mb-md-0 mb-3">
                                        <div className="card bg-transparent text-white p-3">
                                            <div className="card-body">
                                                <p className="card-text text-muted">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                                                <h5 className="card-text text-muted">Allen Smith</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 mb-md-0 mb-3">
                                        <div className="card bg-transparent text-white p-3">
                                            <div className="card-body">
                                                <p className="card-text text-muted">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                                                <h5 className="card-text  text-muted">Allen Smith</h5>
                                            </div>
                                        </div>
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

export default Views
