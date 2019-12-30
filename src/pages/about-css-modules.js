import React from "react"
import { Link } from "gatsby"

import Emoji from "a11y-react-emoji"

import Header from "../components/header"
import styles from "../components/about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => {
    return (
        <div className={styles.user}>
            <img src={props.avatar} className={styles.avatar} alt="" />
            <div className={styles.description}>
                <h2 className={styles.username}>{props.username}</h2>
                <p className={styles.excerpt}>{props.excerpt}</p>
            </div>
        </div>
    )
}

const SmileyShades = () => {
    return (
        <Emoji symbol="😎" label="smiley with shades" />
    )
}

export default () => {
    return (
        <Container>
            <div style={{ margin: "0 auto", textAlign: "center"}}>
                <Link className="button" to="/">Home</Link>
            </div>
            <Header headerText="About CSS Modules" />
            <p><SmileyShades/> CSS Modules are cool! <SmileyShades/></p>
            <User
                username="Jane Doe"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <User
                username="Bob Smith"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit." 
            />
        </Container>
    )
}