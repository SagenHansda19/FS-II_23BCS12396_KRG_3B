import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate('/dashboard')
  }

  return (
    <div>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded justify-center items-center flex mx-auto mt-10"
      >
        Login
      </button>
    </div>
  )
}

export default Login