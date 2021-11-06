import React from 'react'
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
                    <a className="icon-container" href='https://github.com/cczarnuch' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faGithub} className="icon github" />
                    </a>
                    <a className="icon-container" href='https://www.linkedin.com/in/connor-czarnuch/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;