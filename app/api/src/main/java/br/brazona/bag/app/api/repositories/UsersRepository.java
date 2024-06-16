package br.brazona.bag.app.api.repositories;

import br.brazona.bag.app.api.entities.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface UsersRepository extends JpaRepository<UsersEntity, Long> {
    @Query("SELECT u FROM UsersEntity u WHERE u.email =?1")
    UsersEntity findByEmail(String email);
}
