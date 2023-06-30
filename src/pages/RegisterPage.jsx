import React from 'react'
import { useForm } from 'react-hook-form'
import useFetch from '../hook/useFetch'

const RegisterPage = () => {

  const {register, handleSubmit, reset} = useForm()
  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  const [ ,,,, createNewUser  ] = useFetch(baseUrl)

  const submit = data => {
    createNewUser('/users', data)
    reset({
      firstName: '' ,
      lastName: '' ,
      email: '' ,
      password: '' ,
      phone: '' 
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input {...register('firstName')} type="text" id='firstName'/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input {...register('LastName')} type="text" id='lastName'/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} type="email" id='email'/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} type="password" id='password'/>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} type="number" id='phone'/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage