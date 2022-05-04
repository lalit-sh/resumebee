import pic from '../../Assets/images/Logo.png'
import searchIcon from '../../Assets/images/SearchIcon.png'

const Main = () => {
    return ( 
            <main>
            <div className='container'>
                <h3 className="h3">Build your resume in less than 5 minutes with 
                <span className='span'>
                    <img className="img-logo" src={pic} alt='logo'></img>
                    <img className="search" src={searchIcon} alt='search'></img>
                    </span> 
                    absolutely free</h3>
            <a href='#resume'>Build My Resume Now</a>
            </div>
        </main>
     )
}
 
export default Main;