package com.hospital.model.repository.event;

import com.hospital.model.entity.event.EventEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEventRepository extends JpaRepository<EventEntity, Integer> {
}
