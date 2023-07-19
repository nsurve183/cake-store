

import React from 'react'
import '../scss/cakestypes/cakestypes.css'

const CakesTypes = () => {
  return (
    <>
     <div className="container mt-4">
        <div className="row">
            <div className="col-md-4 col-12 mb-md-0 mb-4">
               <div className="imgsection d-flex justify-content-center align-items-center flex-column">
               <img src="/images/c1.jpg" className='img-fluid' alt="imageNotFound" />
               <h3 className='img_title'>Birthday Cakes</h3>
               </div>
            </div>
            <div className="col-md-4 col-12 mb-md-0 mb-4">
            <div className="imgsection d-flex justify-content-center align-items-center flex-column">
               <img src="/images/c2.jpg" className='img-fluid' alt="imageNotFound" />
               <h3 className='img_title'>Wedding Cakes</h3>
               </div>
            </div>
            <div className="col-md-4 col-12 mb-md-0 mb-4">
            <div className="imgsection d-flex justify-content-center align-items-center flex-column">
               <img src="/images/c3.jpg" className='img-fluid' alt="imageNotFound" />
               <h3 className='img_title'>Cupcakes</h3>
               </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default CakesTypes
