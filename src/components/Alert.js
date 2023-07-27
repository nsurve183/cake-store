
import React, { useContext } from 'react'

import CakeContext from '../context/cakes/CakeContext'


const Alert = () => {
  const context = useContext(CakeContext)
  const { errorAlert } = context
  return (
    <>
    <div className='mb-2' style={{height: '50px'}}>
    {errorAlert && <div className={`alert alert-${errorAlert.type} alert-dismissible py-2 fade show `} data-bs-dismiss="alert" role="alert">
        <strong>{errorAlert.massage}</strong> 
      </div>} 
    </div>
    </>
  )
}

export default Alert
