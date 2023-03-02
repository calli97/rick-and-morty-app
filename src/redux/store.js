import {createStore} from 'redux'
import  reducer from './reducer'

//useSelector//UseDispatch

const store=createStore(reducer)

export default store