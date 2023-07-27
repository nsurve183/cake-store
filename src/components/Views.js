

import React, { useContext, useEffect } from 'react'
import CakeContext from '../context/cakes/CakeContext';
import '../scss/views/views.css'
import ViewsPegination from './ViewsPegination';

const Views = () => {

    const context = useContext(CakeContext)

    //this state use fetch user views
    const { view, getViewData } = context

    useEffect(() => {
        getViewData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="viewsection mt-3 mb-0 ">
                <h5 className='reply_title text-center mb-0'>What Says Our Customers</h5>
                <div className="container my-4">
                    <div className="row d-flex justify-content-center align-items-center">

                        {view.map((val) => {
                            return <div className="col-md-4 col-12 mb-md-0 mb-3" key={val._id}>
                                <div className="card bg-transparent text-white p-3">
                                    <div className="card-body">
                                        <p className="card-text text-muted">
                                            {val.description}
                                        </p>
                                        <h5 className="card-text text-muted"> {val.name}</h5>
                                    </div>
                                </div>
                            </div>
                        })
                        }

                    </div>
                </div>
                    <ViewsPegination />
            </div>
        </>
    )
}

export default Views
