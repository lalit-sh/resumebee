import logo from '../../Assets/images/Logo.png'

import './style.scss';



const Home = () => {
    return ( 
        <div className='home-container'>
            <div className='container-center'>
                <h3>
                    Build your resume in less than 5 minutes with 
                </h3>
                <img 
                    className="img-logo" 
                    src={logo} 
                    alt='logo' 
                />
                <h3 className='h3-2'>
                    absolutely free
                </h3>
                <a href='#resume' className='btn btn-primary'>
                    Build My Resume Now
                </a>
            </div>
        </div>
    )
}

export default Home;

