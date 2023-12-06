import { useEffect, useState } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';


const ListOfGifs = ({params}) => {
    const {keyword} =params;
    const [gifs, setGifs] = useState({
        loading: false, results: []
    })

    useEffect(() => {
        setGifs(actualGifs => ({loading: true, results: actualGifs.results}))
    
      getGifs({keyword})
      .then(gifs => {
        setGifs({loading: false, results: gifs})
      })
    }, [ keyword])

if (gifs.loading) return <h1>cargando...</h1>

  return <div>
    {
        gifs.results.map(({id, title, url}) => 
        <Gif 
        id={id}
        key={id} 
        title={title} 
        url={url} 
        />
        )
    }
  </div>
}

export default ListOfGifs