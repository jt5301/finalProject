import React from 'react'
import {connect} from 'react-redux'
import {getAllCampuses} from '../store'

class Campuses extends React.Component{
  componentDidMount(){
    this.props.getCampuses()
  }
  render(){
    let allCampuses = this.props.campusState.allCampuses
    return(
      <main>
      <h1>All Campuses</h1>
      {allCampuses.map((current)=>{
        return(
          <div key = {current.id}>
          {current.name}
          <img src = {current.imageUrl} />
          </div>
        )
      })}
      </main>
    )
  }
}


const mapState = (state) =>({
  campusState:state.campusState
})

const mapDispatch= (dispatch) =>({
  getCampuses: () =>{dispatch(getAllCampuses())}
})

export default connect (mapState,mapDispatch)(Campuses)

