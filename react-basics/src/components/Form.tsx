import React, { ChangeEvent, useRef, useState } from 'react'
import { userData } from './interfaces/interface'

interface Fprops {
    login: boolean
    setLogin: (val: boolean) => void
    setData: (use: userData) => void
    data: userData
}  



const Form = ({ setLogin, login, data, setData }: Fprops) => {

    const handleClick = () => {
        for(const [key, value] of Object.entries(data)) {
            if(value.trim() === "") {
                alert("Please Complete All Feilds")
                console.log(key)
                return;
            }
        }
        setLogin(!login);
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    console.log(data)
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{display: "flex", flexDirection: "column", width: "50%",
        justifyContent: "center"
        }}>
            <h3>Email: {}</h3>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} value={data.name} id='name' type="text" name="name"/>

        <label htmlFor="username">Username: </label>
        <input onChange={handleChange} id='username' value={data.username} type="text" name="username"/>
        
        <label htmlFor="email">Email: </label>
        <input onChange={handleChange} id='email' value={data.email} type="email" name="email"/>
        
        <label htmlFor="password">Password: </label>
        <input onChange={handleChange} id='password' value={data.password} type="password" name="password"/>
        
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input onChange={handleChange} id='confirmPassword'  value={data.confirmPassword} type="password" name="confirmPassword"/>
        
        <label htmlFor="phone">Phone </label>
        <input onChange={handleChange} id='phone'  value={data.phone} type="text" name="phone"/>
        
        <button style={{width: "70px", padding: "10px", margin: "10px 0"}} onClick={handleClick}>Login</button>
    </form>
  )
}

export default Form