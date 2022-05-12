package com.MyMovies.dsMovies.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.MyMovies.dsMovies.dto.MovieDTO;
import com.MyMovies.dsMovies.dto.ScoreDTO;
import com.MyMovies.dsMovies.entities.Movie;
import com.MyMovies.dsMovies.entities.Score;
import com.MyMovies.dsMovies.entities.User;
import com.MyMovies.dsMovies.repositories.MoviesRepository;
import com.MyMovies.dsMovies.repositories.ScoreRepository;
import com.MyMovies.dsMovies.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MoviesRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for(Score s: movie.getScores()){
			sum = sum + s.getValue();
		}
		
		double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepository.save(movie);
		
		return new MovieDTO(movie);
	}

}
