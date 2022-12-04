import React from "react"
import Header from "./Header"
import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Strories"
import Suggestions from "./Suggestions"

const Feed = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-4xl mx-auto">
            <section className="col-span-2">
                <Stories/>
                <Posts/>
            </section>
            <section>
                <div className="fixed">
                    <MiniProfile/>
                    <Suggestions/>
                </div>
            </section>
        </div>
    )
}

export default Feed