import { login, signup } from './actions'

export default function LoginPage() {

  //for log in and signup we rely on html for client input validation
  
  //note minLength is 8 which I set up on supabase

  return (
    <>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required/>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" minLength={8} required />
        <button formAction={login}>Log in</button>
      </form>
    </>
  )
}