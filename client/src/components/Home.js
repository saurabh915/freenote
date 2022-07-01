
import React,{useContext} from 'react'
import Notes from './Notes'


export const Home = (props) => {
 const {showAlert} = props//when we have to pass same prop to another componenent then we use destructuring and pass the same component to another component

  return (
    <div className = "container my-3">
   
  

<Notes showAlert = {showAlert} />
    </div>
  )
}


