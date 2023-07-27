

import React from 'react'
import '../scss/footercomp/footercomp.scss'

const FooterComp = () => {
    const footerDate = new Date().getFullYear()
    return (
        <div>
            <div className="footersection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card text-center lh-base bg-transparent text-white border-0 mb-md-0 mb-4">
                                <h5 className="card-title">Reach At.</h5>
                                <div className="card-body lh-1">
                                    <p className="card-text"><i className="fa-solid fa-location-dot me-2"></i>Location</p>
                                    <p className="card-text"><i className="fa-solid fa-phone me-2"></i>Call +01 123456789</p>
                                    <p className="card-text"><i className="fa-regular fa-envelope me-2"></i>demo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card text-center lh-base bg-transparent text-white border-0">
                                <h5 className="card-title">Cakkery</h5>
                                <div className="card-body lh-base">
                                    <p className="card-para">Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                                    </p>
                                </div>
                                <div className="card-footer border-0 d-flex justify-content-center align-items-center">
                                    <div className="iconsection" onClick={() => window.open('https://www.facebook.com')}>
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className="iconsection ms-2" onClick={() => window.open('https://www.twitter.com')}>
                                        <i className="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className="iconsection ms-2" onClick={() => window.open('https://in.linkedin.com')}>
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <div className="iconsection ms-2" onClick={() => window.open('https://www.instagram.com')}>
                                        <i className="fa-brands fa-instagram"></i>
                                    </div>
                                    <div className="iconsection ms-2" onClick={() => window.open('https://in.pinterest.com/')}>
                                        <i className="fa-brands fa-pinterest"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-4">
                            <h6 className='text-white'>{footerDate} @ All Rights Reserved By Supriya Chavan</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComp
