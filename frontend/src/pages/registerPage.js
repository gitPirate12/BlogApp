import React from 'react'

function registerPage() {
  return (
    <form className='register'>
        <h1>Register</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
    </form>
  )
}

export default registerPage