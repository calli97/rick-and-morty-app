import React, { useEffect, useState } from 'react'
import styles from './Episode.module.css'

function Episode({data}) {
    const [episode, setEpisode] = useState({})
    const [pending, setPending] = useState(true)
    useEffect(() => {
        const getData=async()=>{
            const response=await fetch(data)
            const json=await response.json()
            setEpisode(json)
            setPending(false)
        }
        getData()
    }, [data])
    

  return (
    <div className={styles.container}>
        {pending?'Cargando...':(
            <>
                <h5>{`${episode.episode} - ${episode.air_date}`}</h5>
                <p>{`${episode.name}`}</p>
            </>
        )}
    </div>
  )
}

export default Episode