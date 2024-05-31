package com.gl.todos.mapper;

import com.gl.todos.dto.TodoDto;
import com.gl.todos.entity.Todos;

//DTO-data transfer Object
public class TodoMapper {
	
	// Method to map entity object (Todos) to DTO object (TodoDto)
	public static TodoDto mapTOTodoDto(Todos todos) {
		return new TodoDto(
				todos.getId(),  //map entity id to Dto id
				todos.getTodoTitle(),
				todos.getTodoStatus(),
				todos.getTodoDescription(),
				todos.getDate()
				);
		
	}
	
	
	//Method to map DTO object(tododDto) to entity object (todos)
	public static Todos mapToTodos(TodoDto todoDto) {
		return new Todos(
				todoDto.getId(), // Map DTO id to entity id
				todoDto.getTodoTitle(),
				todoDto.getTodoStatus(),
				todoDto.getTodoDescription(),
				todoDto.getDate()
				);
		
	}
}
