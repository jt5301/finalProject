import React from 'react'
import{HashRouter, Route, Link} from 'react-router-dom'
import Main from './Main'
import Students from './Students'
import Campuses from './Campuses'
import SingleCampus from './SingleCampus'
const Root = () => {
  return (
    <HashRouter>
      <nav>
        Welcome!
        <Link to ='/'>Home</Link>
      <Link to = '/students'>Students</Link>
      <Link to = '/campuses'>Campuses</Link>
      {/* <Link to = '/addNewStudent'>Add New Student</Link>
      <Link to = '/AddCampus'>Add New Campus</Link> */}
      </nav>
        <div>
        <Route path = '/' component = {Main} />
        <Route exact path = '/campuses' component = {Campuses} />
        <Route exact path = '/students' component = {Students} />
        <Route exact path = '/campuses/:campusId' component = {SingleCampus} />
        </div>
    </HashRouter>

  )
}

export default Root
