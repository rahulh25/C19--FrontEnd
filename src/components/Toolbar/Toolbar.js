import React from 'react';
import './Toolbar.css';
import logo from '../images/temp_logo.png';

const toolbar = props =>(
    <header className="toolbar">  
        <nav className="toolbar__navigation">
            <div></div>
            <div className="toolbar__login"> <a href="/homepage"><img src={logo}/> </a></div>
            <div className= "spacer"/>
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/login">login </a></li>
                    <li><a href="/register">register </a></li>
                    <form action="/jobs">
                    <button type="submit">post a job</button>
                    </form>
                    <li><a href="/">     </a></li>
                </ul>
            </div>
        </nav>
    </header>
); 

export default toolbar;