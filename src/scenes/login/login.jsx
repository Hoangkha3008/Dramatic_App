import React from 'react'
import Header from '../../components/Header'
import "./login.css"
const login = () => {
  return (
    <div>
        <Header/>
        <div className='acc-admin'>
            <input type="text" placeholder='username' className='form-control' />
            <br />
            <input type="text" placeholder='password' className='form-control' />
            <br />
            <button className='btn-submit'>Submit</button>
        </div>     
    </div>
  )
}

export default login