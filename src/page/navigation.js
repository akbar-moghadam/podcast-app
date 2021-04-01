import React from 'react';
import Nav from '../data/nav';
import {NavLink} from 'react-router-dom'

function navigation() {
    return (
        <div>
            <nav>
                {Nav.map((item,index) => {
                    return(

                        <ul>
                            <li key={index}><NavLink to={item.link}>{item.to}</NavLink></li>
                        </ul>
                    )
                   
                })}
            </nav>
        </div>
    )
}

export default navigation
