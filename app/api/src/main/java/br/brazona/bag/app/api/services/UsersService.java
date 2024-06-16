package br.brazona.bag.app.api.services;

import br.brazona.bag.app.api.entities.UsersEntity;
import br.brazona.bag.app.api.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {
    @Autowired
    UsersRepository usersRepository;
    public UsersEntity findByEmail (String email){
        return usersRepository.findByEmail(email);
    }
}
