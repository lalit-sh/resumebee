import Github from '../Github'
import Logo from '../Logo'


function Navbar(){
    return(
        <header>
        <nav className='nav-bar'>
        <Logo />
        <div>
            <a href="#over" className='about'>About Us</a>
           <Github />
            
        </div>
        </nav>
    </header>
    )
}

export default Navbar