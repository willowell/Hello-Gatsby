import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default () => {
    return (
        <Container>
            <div style={{ margin: "0 auto", textAlign: "center"}}>
                <Link className="button" to="/">Home</Link>
            </div>
            <Header headerText="Contact your administrator-sama~" />
            <p>
            （　(≪●≫)　）Д（　(≪●≫)　）
            </p>
        </Container>
    )
}