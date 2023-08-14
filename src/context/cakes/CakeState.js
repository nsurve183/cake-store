

import { useState } from "react";
import CakeContext from "./CakeContext";

const CakeState = (props) => {

    const host = "http://localhost:5000";


    // this state for userviews
    const [view, setViews] = useState([])

    // this state for contact page
    const [contact, setcontact] = useState([])
  
    // this state for fetch cakes category data
    const [birthdaycakedata, setBirthCakeData] = useState([])
    // fetch birth day cake data
    const getBirthDayCakesData = async () => {
        const response = await fetch(`${host}/api/cakescategory/getbirthdaycakes`, {
            method: "GET"
        })
        let birthdaycake = await response.json()
        setBirthCakeData(birthdaycake)
    }

    const getWeddingCakes = async () => {
        const response = await fetch(`${host}/api/cakescategory/getweddingcakes`, {
            method: "GET"
        })
        let birthdaycake = await response.json()
        setBirthCakeData(birthdaycake)
    }

    const getCupCakes = async () => {
        const response = await fetch(`${host}/api/cakescategory/getCupCakes`, {
            method: "GET"
        })
        let cupcakes = await response.json()
        setBirthCakeData(cupcakes)
    }

    const getPartyCake = async () => {
        const response = await fetch(`${host}/api/cakescategory/getpartycakes`, {
            method: "GET"
        })
        let partycake = await response.json()
        setBirthCakeData(partycake)
    }


    // add user data for contact cakkery
    const addContactUser = async (fname, lname, email, phnumber, massage) => {
        const response = await fetch(`${host}/api/contact/usercontact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fname, lname, email, phnumber, massage })
        })
        let contactUser = await response.json()
        setcontact(contact.concat(contactUser))
    }


    // add user views
    const addUserViews = async (name, description) => {
        const response = await fetch(`${host}/api/view/addviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name, description })
        })
        let views = await response.json()
        setViews(view.concat(views))
        console.log(views)
    }


    // edit user note 
    const editUserView = async (id, name, description) => {
        const response = await fetch(`${host}/api/view/editview/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name, description })
        })
        const json = await response.json()
        console.log("editView", json)

        let newView = JSON.parse(JSON.stringify(view))
        // edit view code
        for (let index = 0; index < newView.length; index++) {
          const element = newView[index];
          if (element._id === id) {
            newView[index].name = name;
            newView[index].description = description;
            break;
        }
    }
        setViews(newView);
    }

    const deleteUser = async (id) => {
        const response = await fetch(`${host}/api/view/deleteview/${id}`, {
            method: "DELETE",
            headers: {
              "token": localStorage.getItem('token')
            },
          })
          const deleteview = await response.json()
          console.log(deleteview);
          const newview = view.filter((val) => { return val._id !== id });
          alert("View Is Deleted");
          setViews(newview);
    }

    return (
        <>
            <CakeContext.Provider value={{ view, birthdaycakedata, addContactUser, getBirthDayCakesData, getWeddingCakes, getCupCakes, getPartyCake, addUserViews, setViews, editUserView, deleteUser}}>
                {props.children}
            </CakeContext.Provider>
        </>
    )
}

export default CakeState