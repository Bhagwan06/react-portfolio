import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
       {/* {Header} */}
       {/* <!-- dar mode toggler --> */}

        <input type="checkbox" id="darkMode" />
        <div className="wrapper">
          <label htmlFor="darkMode">
              <i className="fa-solid fa-circle-half-stroke"></i>
          </label>

           {/* navbar */}
           <Navbar/>

           {/* {main content} */}
             <Outlet/>

           {/* {footer} */}
           <Footer/>
        </div>
    </>
  );
};
