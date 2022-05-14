import React from "react";
import './Contributor.css'

const Contributor = () =>{

    const date = new Date();
    const year = date.getFullYear();
    console.log(year) 

    return(
        <>
            <div className="c-container">
                <div className="t-top">
                    <span>Contributors</span>
                    <span>We are still in the very initial stage of the project. So for now we are not
                            <br/>
                                    accepting any outside contribution.
                            <br/>
                            But hopefully we will start taking contribution requests soon.
                    </span>
                </div>
                <div className="c-down">
                    <div className="c-craft">
                        <span>Crafted with <i>&#x2665;</i> For Everyone</span>
                    </div>
                    <div className="c-copy">
                      <p>Copyright &copy; <span>{year}</span> All Right Reserved</p>
                    </div>
                   
                </div>
                
            </div>
        </>
    )
}

export default Contributor











