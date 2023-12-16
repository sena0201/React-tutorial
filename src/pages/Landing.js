import { Logo } from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                {/*info*/}
                <div className='info'>
                    <h1>job <span>tracking</span> app</h1>
                    <p>
                        Godard retro adaptogen yes plz everyday carry. VHS live-edge health goth jawn. Plaid vice twee drinking vinegar authentic cold-pressed keytar next level biodiesel irony same.
                    </p>
                    <Link to="/register" className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt='hunt' className='img main-img' />
            </div>
        </Wrapper>
    )
}

export default Landing