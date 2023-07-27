

import { useState } from "react";
import CakeContext from "./CakeContext";

const CakeState = (props) => {
    
    const host = "http://localhost:5000";   


    // this state for userviews
    const [view, setViews] = useState([]);

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
            <CakeContext.Provider value={{view, getViewData, totalrecords, postperpage, currentPage, setcurrentPage, addContactUser, errorAlert, showAlert}}>
                {props.children}
            </CakeContext.Provider>
        </>
    )
}

export default CakeState