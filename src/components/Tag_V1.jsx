import React, {useState, useEffect} from 'react'
import axios from 'axios';


// TO GET API_KEY  
const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [tag, setTag] = useState('dogs');

     const [gif, setGif] = useState ('');
   
    //  fetchGif function has to has a async function peremater tag the you add an & sign &tag=${tag} to the api url after key
     const fetchGif = async(tag) => {
          const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
          axios.get(url) // promise
          const { data } = await axios.get(url);
          
          const imageSrc = data.data.images.downsized_large.url;

          setGif(imageSrc);
     
     }


     // component did mount ... frist render (in we have to do  somethings)
     // how to use async useEffect to fect data.
     useEffect(() => {
          fetchGif('tag');
         },[tag]);

           const handleClick = () => {
               fetchGif(tag);
               
           }
           

  return (
     <div className="container">
           <h1>Random  {tag} Gif</h1>
           <img width="500" src={gif} alt="Random Gif" />

             {/* this line we registrining all key presses and then we seting it to the setTage useState */}
           <input value={tag} onChange={(e) => setTag(e.target.value)}/> 
         
           <button onClick={handleClick}>Click For New</button>
     </div>
    
  )
}

export default Random;