import React from 'react'

function Repo(props) {
    return (
        <>
          <div className='card'>
        <a href={props.repo.html_url}>{props.repo.name}</a>
          
          </div>  
        </>
    )
}

export default Repo
