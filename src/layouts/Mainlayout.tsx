import { Outlet } from 'react-router';
import { Link } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      
      <header>
        <nav>
          <Link to="auth/register">Register</Link> 
          <br/>
          <Link to="auth/login">Login</Link> 
        </nav>
      </header>
      <h2>This is the main layout</h2>
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

export default MainLayout;
