package com.example.demo.model.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.dao.UserDao;
import com.example.demo.model.dto.User;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDao userdao;
	
	
	
	public UserDao getUserdao() {
		return userdao;
	}


	@Autowired
	public void setUserdao(UserDao userdao) {
		this.userdao = userdao;
	}

	
	@Override
	public int signup(User user) {
		return userdao.insertUser(user);
	}
	
	
	
}
