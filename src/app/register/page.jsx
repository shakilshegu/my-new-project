import React from 'react'
import Input from '../components/input'

const Register = () => {
  return (
    <div className='min-h-screen bg-slate-300 flex flex-col justify-center items-center '>
        <div className='bg-white px-16 pb-12 mb-4 '>
            <h1 className='text-3xl  mb-4  mt-4 text-center'>Register</h1>
            <form action="">
               <Input label="Name" id="name" type="text"/>
               <Input label="Email" Id="email"  type="text" />
               <Input label="Password"id="password" type="password"/>
            </form>
        </div>
    </div>
  )
}

export default Register