



import React, { useState } from 'react'
import '../../scss/cakecategory/cakecategory.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


// import { CategoryContext } from '../context/cakes/CakeContext


const AddPartyCakes = () => {
    const [file, setfile] = useState()
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const [cost, setCost] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('title', title)
        formdata.append('description', desc)
        formdata.append('cost', cost)
        formdata.append('file', file)
        try {
            axios.post('http://localhost:5000/api/cakescategory/partycakes', formdata)
                .then((resp) => {
                    if(resp){
                        alert("Data Added Successfully");
                        navigate('/partycake');
                    }
                })
            } catch (error) {
                console.log(error)
            }
    }




    return (
        <div>
            <div className="cakeCategory my-5">
                <div className="container">
                    <div className="row g-3 d-flex justify-content-center align-items-center  text-center">
                        <div className="col-lg-5 col-md-8 col-sm-10 col-11 mb-3">
                            <div className="card text-center">
                                <div className="card-header bg-transparent border-0 px-0 py-0">
                                    <div className="user_icon"><img src="/images/p6.png" className='card-img-top' alt="" /></div>
                                </div>
                                <div className="card-body">
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <div className="col-12">
                                            <h5 className="card-title cakecategory_title">Add Party Cakes</h5>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <form onSubmit={handleSubmit} method='POST'>
                                                <div className="mb-3">
                                                    <label htmlFor="title" className="form-label text-start d-block">Title</label>
                                                    <input type="text" className="form-control" name='title' id="title"
                                                        onChange={(e) => setTitle(e.target.value)} 
                                                    required/>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label text-start d-block"> Description</label>
                                                    <input type="description" className="form-control" id="description" name='description' onChange={(e) => setDesc(e.target.value)} required/>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="cost" className="form-label text-start d-block"> Cost</label>
                                                    <input type="number" className="form-control" id="cost" name='cost' onChange={(e) => setCost(e.target.value)} required/>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="file" className="form-label text-start d-block"> Image Upload</label>
                                                    <input type="file" className="form-control" id="file" name='file'
                                                        onChange={(e) => setfile(e.target.files[0]) }
                                                        required
                                                    />
                                                </div>
                                                <button type='submit' className='btn mt-3'>Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPartyCakes
