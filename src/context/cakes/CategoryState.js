import React, {useState} from 'react'
import { CategoryContext } from './CakeContext'
import axios from 'axios';

const CategoryState = (props) => {
    const host = "http://localhost:5000";
    
    const [category, setcategory] = useState([]);

    const addWeddingCakes = async (title, desc, cost, file) => {
        // const formdata = new FormData();
        // formdata.append('title', title)
        // formdata.append('description', desc)
        // formdata.append('cost', cost)
        // formdata.append('file', file)
        const resp = await axios.post(`${host}/api/cakescategory/weddingcake`)
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }
  return (
    <div>
    <CategoryContext.Provider value={{}}>
          {props.children}
    </CategoryContext.Provider>
  </div>
  )
}

export default CategoryState
