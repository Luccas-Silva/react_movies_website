import { Link } from 'react-router-dom';
import './styles.css';

function Form() {

    const movie = {
        id: 1,
        image: "https://1.bp.blogspot.com/-z1ao0--og0o/YVfX4oXV-OI/AAAAAAAAZx8/TiOcufm-2GIu4W9C1lowKJCcCdltPOSZwCNcBGAsYHQ/s2048/kimetsu-temporada-2-poster_5jqw.jpg",
        title: "Demon Slayer: Kimetsu no Yaiba",
        count: 2,
        score: 4.7
    };

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1 Star</option>
                            <option>2 Star</option>
                            <option>3 Star</option>
                            <option>4 Star</option>
                            <option>5 Star</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default Form;