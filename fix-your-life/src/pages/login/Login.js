// styles
import { useState } from 'react'
import './Login.css'
import { login, isPending, error } from '../../hooks/useLogin'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <label>
        <span>email:</span>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button>Login</button>
      {!isPending && <button className='btn'>Login</button>}
      {isPending && <button className='btn' disabled>Loading</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}
