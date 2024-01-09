package com.hospital.commons.domains.DTO.employee;

import jakarta.persistence.Column;
import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
public class EmployeeDTO {

    private Integer employee_id;
    private String name;
    private String rol;
    private Double salary;
    private String type;
}
