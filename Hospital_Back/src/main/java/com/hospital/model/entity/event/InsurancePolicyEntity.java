package com.hospital.model.entity.event;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;

@Entity
@Getter
@Setter
@ToString
@Data
public class InsurancePolicyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "insurance_policy_number")
    private Integer insurance_policy_number;

    @Column(name = "insurance_policy_provider")
    private String insurance_policy_provider;

}
