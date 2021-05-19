import React from 'react'
import { Link } from 'react-router-dom'
import Typist from 'react-typist';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, my <span className="name-text">name</span> =
                    <Typist className="hero-name" startDelay={1000} cursor={{ hideWhenDone: true, hideWhenDoneDelay: 500 }}>
                        Connor <l />
                        <Typist.Delay ms={250} />
                        Czarnuch
                    </Typist>
                </h1>
                <p className="intro">
                    I am a software engineering student at McMaster University.
                </p>
                <div className="icons">
                    <Link className="icon-container" to={{ pathname: 'https://github.com/cczarnuch' }} target='_blank'>
                        <FontAwesomeIcon icon={faGithub} className="icon github" />
                    </Link>
                    <Link className="icon-container" to={{ pathname: 'https://www.linkedin.com/in/connor-czarnuch/' }} target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;