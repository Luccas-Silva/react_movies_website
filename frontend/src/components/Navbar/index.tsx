import { ReactComponent as GithubIcon } from 'assents/img/github.svg';
import { ReactComponent as TrendyProIcon } from 'assents/img/TrendyPro.svg';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="containar">
                <div className="dsmovies-nav-content">
                    <Link to="/">
                        <h1>
                            <TrendyProIcon />
                            TrendyPro
                        </h1>
                    </Link>
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