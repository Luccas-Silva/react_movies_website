package com.MyMovies.dsMovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MyMovies.dsMovies.entities.Score;
import com.MyMovies.dsMovies.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
}
