import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

//Student Action Types

const RECEIVED_STUDENTS = 'RECEIVED-STUDENTS'

//Student Action Creators

const receivedStudents = (allStudentData)=>{
  return{
    type:RECEIVED_STUDENTS,
    allStudentData
  }
}

//Thunk Student Creator

export const getAllStudents =() =>{
  return async function(dispatch){
    try {
      let res = await axios.get('/api/students')
      let allStudents = res.data
      dispatch(receivedStudents(allStudents))
    } catch (error) {
      console.log(error)
    }
  }
}
const initialState = []
export const StudentReducer = (state = initialState, action) =>{
  switch(action.type){
    case
  }
}




//store export
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  ))
)
