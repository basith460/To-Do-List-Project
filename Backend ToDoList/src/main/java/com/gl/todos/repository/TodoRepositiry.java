package com.gl.todos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gl.todos.entity.Todos;

@Repository
public interface TodoRepositiry extends JpaRepository<Todos, Integer> {

}


// This interface extends JpaRepository which provides CRUD (Create, Read, Update, Delete) operations for the entity type (Todos).
// It also defines methods for querying the database.
