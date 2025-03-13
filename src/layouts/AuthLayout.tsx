import { Outlet } from 'react-router';
import { Link } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
        <header>
            <nav>
            <Link to="/">Back to Home</Link> 
            </nav>
        </header>
        <h2>This is the auth layout</h2>
        <Outlet /> 

    </div>
  )
}

export default AuthLayout