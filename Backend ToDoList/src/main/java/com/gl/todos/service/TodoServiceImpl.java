package com.gl.todos.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.todos.dto.TodoDto;
import com.gl.todos.entity.Todos;
import com.gl.todos.mapper.TodoMapper;
import com.gl.todos.repository.TodoRepositiry;

@Service
public class TodoServiceImpl {
		
	    @Autowired
		private TodoRepositiry todoRepository;
		
	    //Mrthod to create a new Todo
	    public TodoDto createTodo(TodoDto todoDto) {
	    	// Map TodoDto to Todos entity
	        Todos todo = TodoMapper.mapToTodos(todoDto);
	        // Save Todo entity to repository
	    	Todos savedTodo=todoRepository.save(todo);
	    	 // Map saved Todo entity back to TodoDto and return
	    	return TodoMapper.mapTOTodoDto(savedTodo);
	    	
	    }
	    
	    //method to fetch todo using id
	    public TodoDto getTodoById(int todoId) {
	    	Optional<Todos> opt=todoRepository.findById(todoId);
	    	
	    	if(opt.get()!=null) {
	    		Todos todo=opt.get();
	    		return TodoMapper.mapTOTodoDto(todo);
	    	}
	    	
	    	return null;
	    }
	    
	    public List<TodoDto> getAllTodos(){
	    	List<Todos> todos=todoRepository.findAll();
	    	
	    	
	    	return todos.stream().map((todo)->
			TodoMapper.mapTOTodoDto(todo)
				).collect(Collectors.toList());	
	    }
	    
	    // Method to update a Todo by its ID
	    public TodoDto updateTodo(int todoId,TodoDto updateTodo) {
	    	Optional<Todos> opt=todoRepository.findById(todoId);
	    	Todos todo=null;
	    	 // If Todo entity is present, update its properties and save
	    	if(opt.get()!=null) {
	    		todo=opt.get();
	    		todo.setTodoTitle(updateTodo.getTodoTitle());
	    		todo.setTodoStatus(updateTodo.getTodoStatus());
	    		todo.setTodoDescription(updateTodo.getTodoDescription());
	    		todo.setDate(updateTodo.getDate());
	    		
	    		Todos saveTodo=todoRepository.save(todo);
	    		
	    		return TodoMapper.mapTOTodoDto(saveTodo);
	    		
	    	}
	    	 // If Todo entity is not found, return null
	    	return null;
	    }
	    
	    

	    // Method to update Todo status for completion
	    public TodoDto updateForCompleted(int todoListId,TodoDto updatedTodoList) {

			Optional<Todos>opt=todoRepository.findById(todoListId);
			Todos todoList=null;
			if(opt.get()!=null) {
				todoList=opt.get();
				todoList.setTodoStatus(updatedTodoList.getTodoStatus());
				Todos savedTodoList=todoRepository.save(todoList);
				return TodoMapper.mapTOTodoDto(savedTodoList);

			}
			return null;

		}
	    
	    // Method to delete a Todo by its ID
	    public void deleteTodo(int todoId) {
	    	
	    	todoRepository.deleteById(todoId);
	    }
}
