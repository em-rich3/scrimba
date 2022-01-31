import React from "react"
import Image from "./components/Image"
import  Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function Card() {
    return (
        <div>
            <Image />
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}