import { Link } from 'react-router-dom';
import argentBankLogo from '../Assets/img/argentBankLogo.png';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/connSlice';

function Header() {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.profile);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <header className='Header'>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                <div>
                    {
                        !userData.loading && userData.userData && isLoggedIn ?

                            <>
                                <Link to={'/user'} className="main-nav-item">
                                    <i className="fa fa-user-circle"></i>
                                    {userData.userData.body.firstName}
                                </Link>

                                <Link onClick={handleLogout} to={'/'} className='main-nav-item'>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    Sign Out
                                </Link>
                            </>
                            
                            :

                            <Link to='sign-in' className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                                Sign In
                            </Link>
                    }
                </div>
            </nav>
        </header>
    );


}

export default Header;
