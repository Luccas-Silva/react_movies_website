import { ReactComponent as GithubIcon } from 'assents/img/github.svg';
import { ReactComponent as TrendyProIcon } from 'assents/img/TrendyPro.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="containar">
                <div className="dsmovies-nav-content">
                    <h1>
                        <TrendyProIcon />
                        TrendyPro
                    </h1>
                    <a href="https://github.com/Luccas-Silva">
                        <div className="dsmovies-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/Luccas-Silva</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;