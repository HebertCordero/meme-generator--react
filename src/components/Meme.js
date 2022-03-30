import React from 'react';
import memeData from '../misc/memeData';

export default function Meme(){
    const[memeImage, setMeme] = React.useState("https://i.imgflip.com/1bij.jpg");
    // Generates a new meme image from a random pool.
    function newMeme() {
        const memeArr = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArr.length);
        /* Normal way */
        //const url = memeArr[randomNumber].url;
        /* Object destructure way */
        const { url } = memeArr[randomNumber];
        setMeme(url);
    }
    return (
        <main className="meme">
            <div className='form'>
                <input type="text" placeholder="Top text" className="from--input"></input>
                <input type="text" placeholder="Bottom text" className="from--input"></input>
                <button onClick={newMeme} className="from--button">Generate</button>
                <div className="meme--wrapper">
                    <img className={"meme--image"} src={memeImage} alt="awsome meme" />
                    <div className='meme--content'>
                        <p className="meme--text top">Top text</p>
                        <p className="meme--text bottom">Bottom text</p>
                    </div>
                </div>
            </div>
        </main>
    )
}