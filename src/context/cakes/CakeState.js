

import { useState } from "react";
import CakeContext from "./CakeContext";

const CakeState = (props) => {
    
    const host = "http://localhost:5000";   


    // this state for userviews
    const [view, setViews] = useState([])
    
  

    // this state for contact page
    const [contact, setcontact] = useState([])

    // for alert massage
    const [errorAlert, setErrorAlert] = useState({})

    let showAlert = (msg, type) => {
        setErrorAlert({
          massage: msg,
          type: type
        })
    }


    // for pegination of views
    const [currentPage, setcurrentPage] = useState(1);
    const [postperpage, setpostperpage] = useState(3)
    const [totalrecords, setTotalReacords] = useState()

    // fetch user views data
    const getViewData = async () => {
        const response = await fetch(`${host}/api/view/getuserviews`, {
            method: "GET"
        })
        let userviews = await response.json()
        setTotalReacords(userviews.length)
        const lastPostinidex = currentPage * postperpage 
        const firstPostIndex = lastPostinidex - postperpage

        const currentPost = userviews.slice(firstPostIndex, lastPostinidex,  )
        setViews(currentPost)
    }


    
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
            body: JSON.stringify({fname, lname, email, phnumber, massage})
        })
        let contactUser = await response.json()
        setcontact(contact.concat(contactUser))
    }

    return(
        <>
            <CakeContext.Provider value={{view, getViewData, totalrecords, postperpage, currentPage, birthdaycakedata, setcurrentPage, addContactUser, errorAlert, showAlert, getBirthDayCakesData, getWeddingCakes, getCupCakes, getPartyCake}}>
                {props.children}
            </CakeContext.Provider>
        </>
    )
}

export default CakeState