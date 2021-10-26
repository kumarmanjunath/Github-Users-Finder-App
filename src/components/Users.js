import React from 'react'
import Useritems from './Useritems'

export default function Users(props) {
    console.log(props.users)
    return (
        <>
        <div style={userStyle}>
        {props.users.map((user)=>(
                <Useritems user={user}/>
))}
           
        </div>
        </>
    )
}
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}
