package com.MyMovies.dsMovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MyMovies.dsMovies.entities.Movie;

public interface MoviesRepository extends JpaRepository<Movie, Long> {

}
