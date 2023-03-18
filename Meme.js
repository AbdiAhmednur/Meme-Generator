import React from "react"

function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme=> ({
            ...prevMeme,
            randomImage:url
        }))
    }

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    
    return (
        <main>
   
            <div className='from'>
                <input type="text" 
                className='form--input'
                placeholder='top text'
                name='top text'
                value={meme.topText}
                onChange={handleChange}
                
                />
                
                <input type="text"
                className='form--input'
                placeholder='bottom text'
                
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}
                 
                />
            
                <button className='form--button'
                onClick={getMemeImage}
                
                >Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} alt="meme image" className="meme--image" />
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>


    )
}

export default Meme;

// screen shot 5:01:00

// look into event handlers 


// look into array spread  operator in react 


// how you write an es6 

//const thingsElements = thingsArray.map(thing =>)


// keys are essential in map functions 


// look into event handles and es6 with map function 


// look into useState and how you can use it and how you can use it in the latest version of react 


//const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")