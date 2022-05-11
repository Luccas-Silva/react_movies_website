import { ReactComponent as StarFull } from 'assents/img/star-full.svg';
import { ReactComponent as StarHalf } from 'assents/img/star-half.svg';
import { ReactComponent as StarEmpty } from 'assents/img/star.svg';
import './styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
        </div>
    );
}

export default MovieStars;