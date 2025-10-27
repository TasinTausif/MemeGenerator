import {useState, useEffect} from "react"

export default function(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomIndex].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.currentTarget;
        setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}