import  {useState, useEffect} from 'react'
import axios from 'axios';


// TO GET API_KEY  
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

     const [gif, setGif] = useState ('');
   
    //  fetchGif function has to has a async function peremater tag the you add an & sign &tag=${tag} to the api url after key
     const fetchGif = async(tag) => {
          
          
          //  using a tenery operatpor  tag  (tag ? `${url}&tag=${tag}` : url)
          const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
          
          const imageSrc = data.data.images.downsized_large.url;

          setGif(imageSrc);
     
     }


     useEffect(() => {
          fetchGif('tag');
         },[tag]);
         
         return{gif, fetchGif};

     }
          
           


export default useGif;