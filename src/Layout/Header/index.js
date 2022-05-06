import Github from '../../Components/Github';
import Logo from '../../Components/Logo';
import "./style.scss";

function Navbar(){
    return(
        <header className='header header-top'>
            <nav className='nav-bar'>
                <Logo />
                <div>
                    <a 
                        href="#over" 
                        className='about'
                    >
                        About Us
                    </a>
                    <Github />
                </div>
            </nav>
        </header>
    )
}

export default Navbar