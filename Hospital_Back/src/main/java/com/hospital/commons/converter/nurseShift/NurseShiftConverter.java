package com.hospital.commons.converter.nurseShift;

import com.hospital.commons.constans.response.IResponse;
import com.hospital.commons.domains.DTO.nurseShift.NurseShiftDTO;
import com.hospital.commons.helpers.HelperMapper;
import com.hospital.model.entity.nurseShift.NurseShiftEntity;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class NurseShiftConverter {

    public NurseShiftEntity convertNurseShiftDTOToNurseShiftEntity(NurseShiftDTO nurseShiftDTO){
        NurseShiftEntity nurseShiftEntity = new NurseShiftEntity();
        try {
            nurseShiftEntity = HelperMapper.modelMapper().map(nurseShiftDTO, nurseShiftEntity.getClass());
        }
        catch (Exception e){
            log.error(IResponse.DOCUMENT_FAIL + e);
        }
        return nurseShiftEntity;
    }
}
