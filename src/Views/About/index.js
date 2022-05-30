import React from 'react';
import Contributor from './Contributor/Contributor';
import Head from './Head/Head';
import Reason from './Reason/Reason';
import Team from './Team/Team';


const About = () =>{
    return(
        <section>
            <Head/>
            <Reason/>
            <Team/>
            <Contributor/>
        </section>
    )
}



export default About;