import React,{useState} from 'react'

export default function Search(props) {
    const[text,setText]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
       console.log('text',text)
       props.searchData(text)
       setText('')
    }
    return (
        <>
           <form className='form' onSubmit={handleSubmit}>
               <input type='text' name='text' value={text} placeholder="search here.." onChange={(e)=>setText(e.target.value)} />
               <input type='submit' value='search' className='btn btn-dark btn-block' name='text'  />
            
            </form> 
            {props.showClear && <button  type='submit' className='btn btn-light btn-block' onClick={props.clearUsers}>Clear</button>}
            

        </>
    )
}
