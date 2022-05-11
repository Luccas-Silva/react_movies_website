import MovieStars from 'components/MovieStars';
import './styles.css';

function MovieScore() {

    const score = 4.7;
    const count = 15;

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;