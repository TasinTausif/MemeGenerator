import trollFace from "../assets/trollface.png"
export default function(){
    return (
        <header className="header">
            <img 
                src={trollFace}
                alt="Troll Face Logo"
                aria-label="Troll Face Logo"
            />
            <h1>Meme Generator</h1>
        </header>
    )
}