import React from 'react';

import './Navbar.scss';



// set up react router dom
// switch out the a atags for built in Link tags 
// handle collapsing the mobile menu when user click on menu item. 


let menuItems = [
    {
        "label" : "About Us",
        "url" : "/aboutUs"
    },
    {
        "label" : "Contact", 
        "url" : "/contact"
    }, 
    {
        "label" : "Get Help", 
        "url" : "/getHelp"
    },
    {
        "label" : "Create Account", 
        "url" : "/createAccount"
    }
]

function Navbar(props) {

    const [active, setActive] = React.useState(false);

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src="/tesla_logo.png" />
            </div>

            <div className={active ? "navbar__menuItems active" : "navbar__menuItems" } >
                <ul>
                    {
                        menuItems.map((menuItem, key) => {
                            return (
                               
                                <li key={key}>
                                     <a href={menuItem.url}>
                                         {menuItem.label}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="navbar__collapsedMenuIcon" onClick={ () => setActive(!active) } >=</div>
        </div>
    );
}

export default Navbar;


