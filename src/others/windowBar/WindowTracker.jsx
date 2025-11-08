import React from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWindowWidth () {
            console.log("Resized")
            setWindowWidth(window.innerWidth)
        }

        // The callback function passed to useEffect runs after the component mounts
        window.addEventListener("resize", watchWindowWidth)

        // The cleanup function returned from useEffect runs before the component is removed from the DOM
        return function() {
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])//Since the dependencies array is empty, the useEffect will run only once when the component mounts.
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
