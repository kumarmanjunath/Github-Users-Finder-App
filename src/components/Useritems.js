import React from 'react'
import { Link } from 'react-router-dom'


export default function Useritems(props) {
    const {login,avatar_url}=props.user
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt='' className='round-img' style={{width:'60px'}}/>
            <p>{login}</p>
            <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
        </div>
        
    )
}
