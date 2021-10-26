import React from 'react'
import Repo from './Repo'

function RepoList(props) {
    return (
        <>
          {props.repos.map((repo) => (
              <Repo repo={repo} />
          ))}
        </>
    )
}

export default RepoList
