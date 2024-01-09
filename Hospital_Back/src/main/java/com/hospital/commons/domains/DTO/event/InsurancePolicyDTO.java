package com.hospital.commons.domains.DTO.event;

import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
public class InsurancePolicyDTO {
    private Integer insuranceNumber;
    private String provider;
}
