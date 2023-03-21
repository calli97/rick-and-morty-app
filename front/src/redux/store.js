import {createStore,applyMiddleware} from 'redux'
import  reducer from './reducer'
import thunk from 'redux-thunk'
//useSelector//UseDispatch
//import rootReducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));
//const store=createStore(reducer)

export default store