package com.hospital.model.repository.event;

import com.hospital.model.entity.event.InsurancePolicyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IInsurancePolicyRepository extends JpaRepository<InsurancePolicyEntity, Integer> {

}
