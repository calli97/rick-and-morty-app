import React, { useEffect, useState } from 'react'
import styles from './Episodes.module.css'

function Episodes({episodes}) {
    const [data, setData] = useState([])
    const [pending, setPending] = useState(true)
    useEffect(() => {
      const load=async()=>{
        for(let i=0;i<episodes.length;i++){
            const response=await fetch(episodes[i])
            const json=await response.json()
            // setData((data)=>{
            //     return [...data,json]
            // })
            setData([...data,json])
        }
        setPending(false)
      }
      load()
    }, [])
    

  return (
    <div className={styles.container}>
        {pending?'...Cargando':data.map((el,index)=>{
            return (
                <div key={`${el.id}-episode-${index}`}>
                    <h5>{`${el.episode} - ${el.air_date}`}</h5>
                    <p className={styles.epi}>{`${el.name}`}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Episodes