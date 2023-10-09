import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../Styles/img/LogoPYlogo.svg'
import LandingPage from './LandingPage';

export default function NavBar() {
    const dispatch = useDispatch();

    return (
        <nav>
            <div>
                <img src={logo}></img>
            </div>
            <div>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/skills'>Skills</Link>
                    <Link to='/contact'>Contact</Link>
            </div>
            <LandingPage/>
        </nav>
    )

}