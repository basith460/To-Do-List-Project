package com.gl.todos.entity;


import java.util.Date;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Builder.Default;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="todos")   //naming a table as "todos"
public class Todos {   //Entity class which act as Table in database (ORM)
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")  //naming a columns as "id"
	private int id;
	
	@Column(name="title")
	private String todoTitle;
	
	
	@Column(name = "status", columnDefinition = "VARCHAR(255) DEFAULT 'No'")
	private String todoStatus;

	

	
	@Column(name="description")
	
	private String todoDescription;
	
	
	
	@Temporal(TemporalType.TIMESTAMP)    //, you are telling JPA to map that field to a database column with the TIMESTAMP type. 
    @Column(name = "date", nullable = false, updatable = false)
    private Date date;

   

    @PrePersist    //  provides a way to execute custom logic just before an entity is inserted into the database for the first time.
    protected void onCreate() {
        date = new Date();
    }

  

    

}
