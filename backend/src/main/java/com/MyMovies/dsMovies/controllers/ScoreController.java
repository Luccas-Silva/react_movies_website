package com.MyMovies.dsMovies.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MyMovies.dsMovies.dto.MovieDTO;
import com.MyMovies.dsMovies.dto.ScoreDTO;
import com.MyMovies.dsMovies.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;
	
	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO dto) {
		MovieDTO moviedto = service.saveScore(dto);
		return moviedto;
	}

}
