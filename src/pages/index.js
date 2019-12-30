import React from "react"

import Emoji from "a11y-react-emoji"

import Header from "../components/header"
import Container from "../components/container"
import Navbar from "../components/navbar"

const Star = () => {
    return (
        <Emoji symbol="⭐️" label="star" />
    )
}

const WhiteExclamation = () => {
    return (
        <Emoji symbol="❕" label="white exclamation" />
    )
}

export default () => {
    const links = [
        {
            id: 0,
            name: "Home",
            path: "/",
            type: "button"
        },
        {
            id: 1,
            name: "About",
            path: "/about/",
            type: "button"
        },
        {
            id: 2,
            name: "Contact",
            path: "/contact/",
            type: "button"
        },
        {
            id: 3,
            name: "About CSS Modules",
            path: "/about-css-modules/",
            type: "button"
        }
    ]

    return (
        <Container>
            {/* Take the list of buttons above and filter out the button for Home */}
            <Navbar links={ links.filter( (e) =>  e.id !== 0 ) } />
            <Header headerText="(^・ω・^ ) Welcome!!" />
            <h2>
                こんにちは世界〜<WhiteExclamation/><WhiteExclamation/><WhiteExclamation/>(ﾉ≧∀≦)ﾉ <Star/><Star/><Star/>
            </h2>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </Container>
    )
}
