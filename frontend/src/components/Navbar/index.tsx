import {ReactComponent as GithubIcon} from 'assents/img/github.svg';
import './styles.css';

function Navbar(){
    return(
        <header>
            <nav className="conteiner">
                <div className="dsmovie-nav-content">
                    <h1>TrendyPro</h1>
                    <a href="https://github.com/Luccas-Silva">
                    <div className="dsmovie-contact-conteiner">
                        <GithubIcon />
                        <p className=".dsmovie-contact-link">/Luccas-Silva</p>
                    </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;