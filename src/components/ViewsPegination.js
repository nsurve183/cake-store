

import React, { useContext } from 'react'
import '../scss/views/views.scss'
import CakeContext from '../context/cakes/CakeContext'


const ViewsPegination = () => {
  const context = useContext(CakeContext);
  const { totalrecords, postperpage, setcurrentPage, getViewData, currentPage } = context

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalrecords / postperpage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className="pagination">
        {pages.map((page, index) => {
          return <button className={`btn btn-warning btn-sm mx-1 text-white ${(page === currentPage) ? "active": ""}`} key={index} onClick={() => { setcurrentPage(page); getViewData() }
          }>{page}</button>
        })}
      </div>
    </div>
  )
}

export default ViewsPegination
