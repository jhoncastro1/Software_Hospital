package com.hospital.model.repository.employee;

import com.hospital.model.entity.employee.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmployeeRepository extends JpaRepository <EmployeeEntity, Integer>{
}
