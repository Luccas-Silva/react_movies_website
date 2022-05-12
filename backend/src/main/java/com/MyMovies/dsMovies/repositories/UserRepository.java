package com.MyMovies.dsMovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MyMovies.dsMovies.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
}
