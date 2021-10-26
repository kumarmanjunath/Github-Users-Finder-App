
import './App.css';
import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import { Switch } from 'react-router';
// import Home from './Home'
 import About from './components/About';
// import Contact from './Contact';
// import Error from './Error';
import Navbar from './components/Navbar';
import axios from 'axios';
import Users from './components/Users';
import Search from './components/Search';
import UserDetail from './components/UserDetail';

const url="https://api.github.com/users";

function App() {
  const [users,setUsers]=useState([])
  const [user,setUser]=useState({})
  const[repos,setRepos]=useState([])
  const searchData=async(text)=> {  
      const res=await axios.get(`https://api.github.com/search/users?q=${text}`)
      console.log(res)
      setUsers(res.data.items)
  }

  const clearUsers=()=> {
     setUsers([])
 
  }

  const getDetail=async(login)=> {
    const res =await axios.get(`https://api.github.com/users/${login}`)
    setUser(res.data)
  }

  const getRepos=async(login) => {
    const res =await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=asc`)
    setRepos(res.data)
  }
//   useEffect(async()=> {
// const res=await axios('https://api.github.com/users')
// console.log(res.data)
// setUsers(res.data)
//   },[])

//   const[gusers,setGusers]=useState([])

//   async function getData()  {
//   const res=await fetch(url)
//   const res1=await res.json()
//   console.log(res1);
//   setGusers(res1)
//   }
// useEffect(()=> {
//   getData()
// },[])
//   return (
//   <>
//   {gusers.map((user)=> {
//     return (
//       <li>{user.login}</li>
//   )}
//   )}
//     </>
//   )
// const [name,setName]=useState('')
// const [age,setAge]=useState('')
// function handleSubmit(e) {
// e.preventDefault();
// alert('hello')
// alert(name)
// alert(age)
// }
// function handleChangeName(e){
//   setName(e.target.value)
// }

// function handleChangeAge(e){
//   setAge(e.target.value)
// }
// return (
//   <>
//   <form onSubmit={handleSubmit}>
//     <label htmlFor='Name'>Name</label>
//     <input type='text' name='name' value={name} onChange={handleChangeName}/>
//     <label htmlFor='Age'>Age</label>
//     <input type='number' name='age' value={age} onChange={handleChangeAge}/>
//     <input type='submit'/>

//   </form> 
//   </>
// )

// return (
//   <Router> 
//     <Switch>
//     <Route exact path='/' component={Home}></Route>
//     <Route  path='/about' component={About}></Route>
//     <Route  path='/contact' component={Contact}></Route>
//     <Route  path='*' component={Error}></Route>
//     </Switch>
//   </Router>
// )

return (
  <Router>
 
  <Navbar/>
  <div className='container'>
    <Switch>
    <Route exact path='/' render={
      props => (
        <>
         <Search searchData={searchData} showClear={users.length > 0 ? true : false} clearUsers={clearUsers}/>
      <Users users={users}/>
        </>
      )
    }/>
   
  <Route  exact path='/about' component={About}></Route>
  <Route  exact path='/user/:anything' render={
    props=>(
      <UserDetail getDetail={getDetail} user={user} {...props} getRepos={getRepos} repos={repos} />
    )
  }></Route>
  </Switch>
</div>

  </Router>
)
}     

export default App;
