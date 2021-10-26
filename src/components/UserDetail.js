import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import RepoList from './RepoList'

export default function UserDetail(props) {
    // console.log(props)
    useEffect(()=> {
        props.getDetail(props.match.params.anything)
        props.getRepos(props.match.params.anything)
    },[])
    return (
        <>
         <Link to='/' className='btn btn-dark'>Back To Search</Link>
         Hireable:{props.user.hireable ? (<i className='fa fa-check text-success'></i>) :
         (<i className='fa fa-times-circle text-danger'></i>)}

         <div className='card grid-2'>
        <div className='all center'>
            <img src={props.user.avatar_url} alt='' style={{width:'150px'}} />
            <h1>{props.user.name}</h1>
            <p> Location: {props.user.location}</p>
        </div>
        <div>
            {props.user.bio && (
                <>
                <h3>Bio</h3>
                <p>{props.user.bio}</p>
                </>
            )}
            <a href={props.user.html_url} className="btn btn-dark my-1">Visit Github Profile</a>
            <ul>
            <li>
                {props.user.company && (
            <>
            Company : <strong>{props.user.company}</strong>
            </>
                )}
          </li>
            <li>
               {props.user.blog && (
                   <>
                   Website: <strong>{props.user.blog}</strong>
                   </>
               )}
            </li>
            <li>
               {props.user.login && (
                   <>
                   Username: <strong>{props.user.login}</strong>
                   </>
               )}
            </li>
            </ul>
        </div>
         </div>
         <div className='card text-center'>
            <div className='badge badge-primary'>Followers: {props.user.follower}</div>
            <div className='badge badge-success'>Following: {props.user.following}</div>
            <div className='badge badge-danger'>Public Repos: {props.user.public_repos}</div>
            <div className='badge badge-dark'>Public Gists: {props.user.public_gists}</div>
         </div>
         <RepoList repos={props.repos}/>
        </>
    )
}
