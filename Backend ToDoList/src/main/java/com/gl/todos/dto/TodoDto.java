package com.gl.todos.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data  //combination of @Getters @Setters and @toString
@AllArgsConstructor
@NoArgsConstructor
public class TodoDto {    //Data transfer object
	
	private int id;
	
	private String todoTitle;
	
	private String todoStatus;
	
	private String todoDescription;
	
	private Date date;

}
