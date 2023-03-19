import { Link } from 'react-router-dom';
import './index.scss';

const NotFound = () => {
    return (
        <div className='container not-found'>
            <div className="center">
                <h1>You seem to be lost.</h1>
                <p>We got you, let's get you back <Link to="/meetings">home</Link>!</p>
                <img src="https://cdn.pixabay.com/photo/2014/11/07/21/35/zombie-521243_960_720.png" alt='zombie'/>
            </div>
        </div>
    )
}

export default NotFound;