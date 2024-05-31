package com.gl.todos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.todos.dto.TodoDto;
import com.gl.todos.service.TodoServiceImpl;

import lombok.AllArgsConstructor;

@CrossOrigin("*")  //enable cross-origin resource sharing (CORS)
@RestController    //responsible for handlinh HTTp requests
@AllArgsConstructor
@RequestMapping("/api/todos") //Maps HTTP requests to handler methods in a controller. 
public class TodoController {
	
	@Autowired
	private TodoServiceImpl todoService;
	
	@PostMapping
	public ResponseEntity<TodoDto> createTodo(@RequestBody TodoDto todoListDto){
		TodoDto todoList=todoService.createTodo(todoListDto);
		return new ResponseEntity<>(todoList,HttpStatus.CREATED);  //that represents the entire HTTP response
	}
	
	@GetMapping("{id}")
	public ResponseEntity<TodoDto> getTodoById(@PathVariable("id")int todoListId){

		TodoDto todoListDto=todoService.getTodoById(todoListId);
		return ResponseEntity.ok(todoListDto);  
		
	    // Return ResponseEntity with the TodoDto as the body and HTTP status 200 OK

	}

	
	@GetMapping
	public ResponseEntity<List<TodoDto>> getAllTodoList(){
		List<TodoDto> todoList=todoService.getAllTodos();
		return ResponseEntity.ok(todoList);
	}

	
	@PutMapping("{id}")
	public  ResponseEntity<TodoDto>updateTodoList(@PathVariable("id") int todoListId,@RequestBody TodoDto updateTodoList ){
		TodoDto todoListDto=todoService.updateTodo(todoListId, updateTodoList);
		return ResponseEntity.ok(todoListDto);

	}
	
	
	@PutMapping("/updatestatus/{id}")
	public  ResponseEntity<TodoDto>updateTodoCompleted(@PathVariable("id") int todoListId,@RequestBody TodoDto updateTodoList ){
		TodoDto todoListDto=todoService.updateForCompleted(todoListId, updateTodoList);
		return ResponseEntity.ok(todoListDto);

	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteTodoList(@PathVariable("id")int todoListId){
		todoService.deleteTodo(todoListId);
		return ResponseEntity.ok("Department deleted successfullly");
	}
	

}
