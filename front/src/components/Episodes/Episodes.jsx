import Episode from '../Episode/Episode'
import styles from './Episodes.module.css'

function Episodes({episodes}) {   

  return (
    <div className={styles.container}>
        {episodes.map((el,index)=><Episode key={`${episodes.length*4-index}-${el}`} data={el}/>)}
    </div>
  )
}

export default Episodes