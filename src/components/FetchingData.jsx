import {useState} from "react"

export default function() {
    const [starWarsData, setStarWarsData] = useState(null)
    // 1. GET the data
    // 2. Save the data in state
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    
    return (
        <div>
            <pre>{JSON.stringify({starWarsData}, null, 2)}</pre>
        </div>
    )
}