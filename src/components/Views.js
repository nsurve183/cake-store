

import React, { useEffect, useState, useContext } from 'react'
import CakeContext from '../context/cakes/CakeContext';
import '../scss/views/views.css'
import { useRef } from 'react';



const Views = () => {
    const context = useContext(CakeContext)
    const {editUserView, deleteUser} = context

    // For Pagination We Define fetchUserViews and getViewData function here
    const host = "http://localhost:5000";

    const [view, setViews] = useState([]);
    const [Page, setPage] = useState(1)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchUserViews();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        } else {
            getViewData();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [])

    const getViewData = async () => {
        const response = await fetch(`${host}/api/view/getuserviews`, {
            method: "GET"
        })
        let userviews = await response.json()
        setViews(userviews)
    }

    const fetchUserViews = async () => {
        const response = await fetch(`${host}/api/view/fetchuserviews`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            },
        })
        let userviews = await response.json()
        setViews(userviews)
    }


    // Next Page
    const next = async () => {
        if (localStorage.getItem('token')) {
            setPage(Page + 1)
            const response = await fetch(`${host}/api/view/fetchuserviews?page=${Page + 1}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')
                },
            })
            let userviews = await response.json()
            setViews(userviews)
        } else {
            setPage(Page + 1)
            const response = await fetch(`${host}/api/view/getuserviews?page=${Page + 1}`, {
                method: "GET"
            })
            let userviews = await response.json()
            setViews(userviews)
        }
    }

    // Prev Page
    const prev = async () => {
        if (localStorage.getItem('token')) {
            setPage(Page - 1)
            const response = await fetch(`${host}/api/view/fetchuserviews?page=${Page - 1}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')
                },
            })
            let userviews = await response.json()
            setViews(userviews)
        } else {
            setPage(Page - 1)
            const response = await fetch(`${host}/api/view/getuserviews?page=${Page - 1}`, {
                method: "GET"
            })
            let userviews = await response.json()
            setViews(userviews)
        }

    }


    // editview and model box
    const ref = useRef(null)
    const refClose = useRef(null)
    const [userview, setuserview] = useState({id: "", ename: "", edescription: ""})

    const updadeview = (currentview) => {
        ref.current.click();
        setuserview({id: currentview._id, ename: currentview.name, edescription: currentview.description})
        
    }


    const handleClick = () => {
        refClose.current.click()
        editUserView(userview.id, userview.ename, userview.edescription)
        alert("Your View Is Updated")
    }

    const onchange = (event) => {
        setuserview({...userview, [event.target.name]: event.target.value})
    }

    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit View</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="ename" className="form-label text-start d-block">User Name</label>
                                    <input type="text" className="form-control" name='ename' id="ename" value={userview.ename} onChange={onchange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label text-start d-block">User Description</label>
                                    <input type="text" className="form-control" id="edescription" value={userview.edescription} name='edescription'  onChange={onchange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="viewsection mt-3 mb-0 ">
                <h5 className='reply_title text-center mb-0'>What Says Our Customers</h5>
                <div className="container my-4">
                    <div className="row d-flex justify-content-center align-items-center">
                        {view.length === 0 ? <div><h5 className='text-center'>No Views Added</h5></div> : ""}
                        {view.map((val) => {
                            return (val.length < 0) ? "pls" : <div className="col-md-4 col-12 mb-md-0 mb-3" key={val._id}>
                                <div className="card p-3">
                                    <div className="card-body">
                                        <p className="card-text text-muted">
                                            {val.description}
                                        </p>
                                        <h5 className="card-text text-muted"> {val.name}</h5>
                                    </div>
                                    {localStorage.getItem('token') ? <div className="card-footer bg-transparent border-0 text-end">
                                        <i className="fa-regular fa-pen-to-square" onClick={() => updadeview(val) }></i>
                                        <i className="fa-solid fa-trash-can ms-3" onClick={() => {deleteUser(val._id)}}></i>
                                    </div> : ""}
                                </div>
                            </div>
                        })
                        }
                    </div>
                </div>
                <div>
                    <button className='btn btn-warning text-white' onClick={prev} disabled={Page <= 1}><i className="fa-solid fa-angles-left"></i></button>
                    <button className='btn btn-warning text-white ms-4' onClick={next} disabled={view.length < Page}><i className="fa-solid fa-angles-right"></i></button>
                </div>
            </div>
        </>
    )
}

export default Views
