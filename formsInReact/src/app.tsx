import { useState } from 'preact/hooks'
import './app.css'
import { FormInputList } from './constants'
import { IFormProps } from './interfaces'
import { ChangeEvent  } from 'preact/compat'
export function App() {
  const [userdata, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    address: ''
  })
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setUserData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }
  const handleSubmit = (e: Event) => {
    e.preventDefault()
    if (Object.values(userdata).some((value) => value.trim() === '')) {
      alert('Please fill in all fields');
      return;
    }
    console.log(userdata)
    setUserData({
      username: '',
      email: '',
      password: '',
      address: ''
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      {FormInputList.map((input: IFormProps) => (
      <label key={input.id} htmlFor={input.id}><span className='astrisk'>*</span>{input.label}
        <input 
          onChange={handleChange}
          type={input.type}
          placeholder={input.label}
          name={input.name} 
          value={userdata[input.name]}
        />
      </label>
      ))}
      <div className='submitWrapper'>
        <button type='submit'>Login</button>
      </div>
    </form>
  )
}

