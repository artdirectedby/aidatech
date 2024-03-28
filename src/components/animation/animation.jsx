import aidatech from "./aidatech.json"
import React from "react"
import Lottie from "lottie-react"

export default function Animation() {
    return (
        <div className="animation">
            <Lottie animationData={aidatech} />
        </div>
    )
};