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
            <Header headerText="(=^･ω･^)y＝" />
            <h2>
                こんにちは、ガツビ！！！
            </h2>
            <p>
                お元気ですか？
                。。。
                あー、そう？
            </p>

            <iframe title="cute otter" width="560" height="315" src="https://www.youtube.com/embed/BcyYQXTHIV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Container>
    )
}