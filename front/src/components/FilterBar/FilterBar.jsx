import React from 'react'
import styles from './FilterBar.module.css'
import {filterByGender,filterNone,orderByID,orderNone,orderByName} from '../../redux/actions'
import { useDispatch } from 'react-redux'

const orders={
    name:orderByName,
    none:orderNone,
    id:orderByID
}

function FilterBar() {
const dispatch=useDispatch()

const handleFilter=(e)=>{
    dispatch(filterByGender(e.target.value))
}
const handleFilterNone=(e)=>{
    dispatch(filterNone())
}



const handleOrder=(e)=>{
    dispatch(orders[e.target.value]())
}
    return (
    <div className={styles.filterBar}>
        <div className={styles.filter}>
            <h5>Filter By Gender</h5>
            <div className={styles.options}>
                <div className={styles.option}>
                    <label htmlFor="none">None</label>
                    <input type="radio" name='gender' onClick={handleFilterNone} className={styles.input}/>
                </div>
                <div className={styles.option}>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name='gender' value={'Male'} onClick={handleFilter} className={styles.input}/>
                </div>
                <div className={styles.option}>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name='gender' value={'Female'} onClick={handleFilter} className={styles.input}/>
                </div>
                <div className={styles.option}>
                    <label htmlFor="genderless">Genderless</label>
                    <input type="radio" name='gender' value={'Genderless'} onClick={handleFilter} className={styles.input}/>
                </div>
            </div>
        </div>
        <div className={styles.order}>
            <h5>Order by:</h5>
            <div className={styles.options}>
                <div className={styles.option}>
                    <label htmlFor="none">None</label>
                    <input type="radio" name='order' value='none' onClick={handleOrder} className={styles.input}/>
                </div>
                <div className={styles.option}>
                    <label htmlFor="id">ID</label>
                    <input type="radio" name='order' value='id' onClick={handleOrder} className={styles.input}/>
                </div>
                <div className={styles.option}>
                    <label htmlFor="name">Name</label>
                    <input type="radio" name='order' value='name' onClick={handleOrder} className={styles.input}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilterBar