package com.hospital.model.entity.nurseShift;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Data
@Setter
@ToString
@Entity
public class NurseShiftEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shift_id")
    private Integer shiftId;

    @Column(name = "nurse")
    private Integer nurse;

    @Column(name = "shift_date")
    private Integer shitDate;

    @Column(name = "shift_type")
    private Integer shiftType;

}