import React from 'react';
import {Link} from 'react-router-dom';
import '../css/home.scss'

function Home() {
    return (
        <div className="main-container">
           <div className="buy">
           <button type="button"><Link to="/">مشاهده و خرید</Link></button>
              <h1>مرچندایزپادکست</h1> 
             
            </div> 
        </div>
    )
}

export default Home
