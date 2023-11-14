package com.example.demo.model.dto;

public class User {
	
	private String Id;
	private String Password;
	private int age;
	private int TrainingExperience;
	
	public User(String id, String password, int age, int trainingExperience) {
		super();
		Id = id;
		Password = password;
		this.age = age;
		TrainingExperience = trainingExperience;
	}
	
	public User() {
		super();
	}
	
	public String getId() {
		return Id;
	}
	
	public void setId(String id) {
		Id = id;
	}
	
	public String getPassword() {
		return Password;
	}
	
	public void setPassword(String password) {
		Password = password;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public int getTrainingExperience() {
		return TrainingExperience;
	}
	
	public void setTrainingExperience(int trainingExperience) {
		TrainingExperience = trainingExperience;
	}
	
}
