package com.hospital.model.entity.employee;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Data
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id")
    private Integer employee_id;

    @Column(name = "name")
    private String name;

    @Column(name = "rol")
    private String rol;

    @Column(name = "salary")
    private Double salary;

    @Column(name = "type")
    private String type;

}
