import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => {
    return (
        <div>
            <div>
                <Link to="/contact/">Contact</Link>
                <Link to="/about/">About</Link>
                <Link to="/about-css-modules">About CSS Modules</Link>
            </div>
            <Header headerText="(^・ω・^ )" />
            <h2>
                こんにちは世界〜❕❕❕(ﾉ≧∀≦)ﾉ ⭐️⭐️⭐️
            </h2>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
    )
}
