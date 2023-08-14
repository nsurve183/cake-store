import React, {useState} from 'react'
import { CategoryContext } from './CakeContext'

const CategoryState = (props) => {
    const host = "http://localhost:5000";
    
    const [category, setcategory] = useState([]);

    // add birthday cake
    const addBirthdayCake = async (title, description, cost) => {
        try {
            const resp = await fetch(`${host}/api/cakescategory/birthdaycakes`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title, description, cost})
            })
            const result = await resp.json();
            setcategory(category.concat(result));
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
    <CategoryContext.Provider value={{addBirthdayCake}}>
          {props.children}
    </CategoryContext.Provider>
  </div>
  )
}

export default CategoryState
