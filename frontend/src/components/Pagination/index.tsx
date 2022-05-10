import { ReactComponent as Arrow } from 'assents/img/arrow.svg';
import './styles.css';

function Pagination() {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${25}`}</p>
                <button className="dsmovie-pagination-button" disabled={true} >
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;