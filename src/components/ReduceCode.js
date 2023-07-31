
import React, { useContext, useEffect } from 'react'
import CakeContext from '../context/cakes/CakeContext';
import '../scss/wcake/wcake.css'
import { useLocation } from 'react-router-dom';


const ReduceCode = () => {

  const location = useLocation()

  const context = useContext(CakeContext);
  const { getBirthDayCakesData, getPartyCake, getCupCakes, getWeddingCakes, birthdaycakedata} = context
  // console.log(birthdaycakedata)

    useEffect(() => {
      if(location.pathname === '/cupcake'){
        getCupCakes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }else if(location.pathname === '/partycake'){
        getPartyCake();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }else if(location.pathname === '/weddingcake'){
        getWeddingCakes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }else if(location.pathname === '/birthdaycake'){
        getBirthDayCakesData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
      }
    }, [])

  return (
    <div>
      <div className="wsection mb-4 mt-lg-4 mt-0">
        <h3 className='wtitle mb-4 mt-3'>Our Varities</h3>
        <div className="container">
          <div className="row">
            <div className="col-12 order-lg-1 order-2">
              <div className="row">
              {birthdaycakedata.map((val) => {
                return <div className="col-lg-3 col-sm-6 col-12 mb-3" key={val._id}>
                  <div className="card">
                    <img src="/images/cake2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-text">{val.description}</p>
                      <p className="card-text">{val.cost}</p>
                    </div>
                  </div>
                </div>
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReduceCode
