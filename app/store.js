import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

//Student Action Types
const RECEIVED_STUDENTS = 'RECEIVED-STUDENTS'

//Campus Action Types
const RECEIVED_CAMPUSES = 'RECEIVED-CAMPUSES'
const RECEIVED_SINGLE_CAMPUS = 'RECEIVED-SINGLE-CAMPUS'

//Student Action Creators

const receivedStudents = (allStudentData)=>{
  return{
    type:RECEIVED_STUDENTS,
    allStudentData
  }
}

//Campus Action Creators

const receivedCampuses = (allCampusData) =>{
  return{
    type:RECEIVED_CAMPUSES,
    allCampusData
  }
}

const receivedSingleCampus = (campusData) =>{
  return{
    type:RECEIVED_SINGLE_CAMPUS,
    campusData
  }
}

// Thunk Campus Creators
export const getAllCampuses = () =>{
  return async function (dispatch){
    try {
      let res = await axios.get('/api/campuses')
      let allCampuses = res.data
      dispatch(receivedCampuses(allCampuses))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSingleCampus = (id) =>{
  return async function (dispatch){
    try {

    } catch (error) {
      console.log(error)
    }
  }
}

//Thunk Student Creators

export const getAllStudents = () =>{
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
const initialStudentState = {
  allStudents:[],
  singleStudent:{}
}

const initialCampusState = {
  allCampuses:[],
  singleCampus:{}
}

const studentReducer = (state = initialStudentState, action) =>{
  switch(action.type){
    case RECEIVED_STUDENTS:
    return {...state, allStudents:action.allStudentData}

    default:return state

    }
}

const campusReducer = (state = initialCampusState, action) =>{
  switch(action.type){
    case RECEIVED_CAMPUSES:
      return {...state, allCampuses: action.allCampusData}

    default:return state
  }
}

const mainReducer = combineReducers({
  campusState:campusReducer,
  studentState:studentReducer
})

//store export
export default createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  ))
)
