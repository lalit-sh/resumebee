import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AuthenticateUser, Logout } from "../../Redux/actions/identity.action";


const Home = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    this is home
                        <>
                            <h1>Logout</h1>
                            <button 
                                className="btn btn-warning" 
                                onClick={() => props.Logout()}
                            >
                                Logout
                            </button>
                        </>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    AuthenticateUser,
    Logout
}, dispatch)

const mapStateToProps = ({identity}) => ({
    identity
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);