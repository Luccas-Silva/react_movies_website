import MovieScore from 'components/MovieScore/intex';
import { Link } from 'react-router-dom';
import './styles.css';

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://1.bp.blogspot.com/-z1ao0--og0o/YVfX4oXV-OI/AAAAAAAAZx8/TiOcufm-2GIu4W9C1lowKJCcCdltPOSZwCNcBGAsYHQ/s2048/kimetsu-temporada-2-poster_5jqw.jpg",
        title: "Demon Slayer: Kimetsu no Yaiba",
        count: 2,
        score: 4.7
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/1${movie.id}`}>
                  <div className="btn btn-primary dsmovie-btn">Avaliar</div>  
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;