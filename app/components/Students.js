import React from 'react'
import {connect} from 'react-redux'
import {getAllStudents} from '../store'


class Students extends React.Component{

  componentDidMount(){
    this.props.getStudents()
  }
  render(){
    const allStudents = this.props.studentState.allStudents

    return(
      <main>
        <h1>All Students</h1>
        <div>
          {allStudents.map((current) =>{
            return(
              <div key = {current.id}>
              {current.firstName} {current.lastName}
              <img src ={current.imageUrl}/>
              </div>
            )
          })}

        </div>

      </main>
    )
  }
}

const mapState = (state) =>({
  studentState:state.studentState
})

const mapDispatch= (dispatch) =>({
  getStudents: () =>{dispatch(getAllStudents())}
})

export default connect (mapState,mapDispatch)(Students)
