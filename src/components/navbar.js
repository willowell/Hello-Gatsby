import React from "react"
import { Link } from "gatsby"

import navbarStyles from "./navbar.module.css"

/**
 * Renders a navigation bar based on a list of buttons. Each button element should have:
 * a type ("button", "square-button", etc.),
 * an id (a unique number for iterating through the list)
 * a path (a path to the page)
 * and a name, which is displayed to the user
 * 
 * e.g.,
 * [
 *  id: 0,
 *  name: "Home",
 *  path: "/"
 *  type: "button"
 * ]
 */
const Navbar = (props) => {
    return (
        <div className={ navbarStyles.navbar }> {
            props.links.map( link => (
                    <div className={ navbarStyles.navbarElement }>
                        <Link 
                            className = { link.type } 
                            key = { link.id } 
                            to = { link.path }
                        >
                            { link.name }
                        </Link> &nbsp; &nbsp;
                    </div>
                )
            )
        }
        </div>
    )
}

export default Navbar