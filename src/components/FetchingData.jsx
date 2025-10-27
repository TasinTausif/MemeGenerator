import {useState, useEffect} from "react"

export default function() {
    const [starWarsData, setStarWarsData] = useState(null)
    const [count, setCount] = useState(0)
    
    // UseEffect will run after the DOM rendering is done. If useEffect is used with useState and without using the second argument(the dependencies array), the rendering will go on for infinite times.
    // If useEffect returns something, it will return a cleanup function that will run before the component is removed from the DOM(When we hide a item from the screen using && it actually removes it from the DOM).
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    }, [count])//Here, the second argument is a dependencies array. If any value in this array changes, the useEffect will run and if  [] is used, it will run only once when the component mounts.
    
    return (
        <div>
            <h1>The Count is {count}</h1>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increase Count</button>
            <pre>{JSON.stringify({starWarsData}, null, 2)}</pre>
        </div>
    )
}