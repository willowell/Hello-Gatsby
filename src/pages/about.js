import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Header headerText="(=^･ω･^)y＝" />
            <h2>
                こんにちは、ガツビ！！！
            </h2>
            <p>
                お元気ですか？
                。。。
                あー、そう？
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/BcyYQXTHIV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}