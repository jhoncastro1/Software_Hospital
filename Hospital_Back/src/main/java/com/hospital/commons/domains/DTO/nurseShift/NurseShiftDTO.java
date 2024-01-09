package com.hospital.commons.domains.DTO.nurseShift;

import jakarta.persistence.Column;
import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
public class NurseShiftDTO {
    private Integer shiftId;

    private Integer nurse;

    private Integer shitDate;

    private Integer shiftType;

}
