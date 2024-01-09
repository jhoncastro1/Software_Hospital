package com.hospital.model.repository.nurseShift;

import com.hospital.model.entity.nurseShift.NurseShiftEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface INurseShiftRepository extends JpaRepository<NurseShiftEntity, Integer> {
}
