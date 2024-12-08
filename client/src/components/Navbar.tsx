import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../utils/auth'; // Import AuthService

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (AuthService.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Kanban Board</Link>
      </div>
      <ul>
        {!loginCheck ? (
          <>
            <li className='nav-item'>
              <button type='button'>
                <Link to='/login'>Login</Link>
              </button>
            </li>
          </>
        ) : (
          <>
            <li className='nav-item'>
              <button type='button' onClick={() => AuthService.logout()}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
      <ul>
        <li className='nav-item'>
          <button type='button'>
            <Link to='/create'>New Ticket</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
