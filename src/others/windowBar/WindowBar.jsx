import React from "react"
import WindowTracker from "./WindowTracker"

export default function() {

    const [show, setShow] = React.useState(true)
    
    function toggle() {
        setShow(prevShow => !prevShow)
    }

    return (
        <main className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>

            {/* Here, the WindowTracker will not hide in the UI rather it will be removed from the DOM if show is false.*/}
            {show && <WindowTracker />}
        </main>
    )
}