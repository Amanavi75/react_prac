import React from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({children})=>{

    const [user,setUser] = React.useState(null)
    return (
       
        <UserContext.Provider val={{user,setUser}}>
        {children}
        </UserContext.Provider> 
        
        // this wrapping will provide all the infromation that we want to passed as props to the component 

        // val is the data that we want to pass
    )
    // set up for using the context api 
}

export default UserContextProvider

