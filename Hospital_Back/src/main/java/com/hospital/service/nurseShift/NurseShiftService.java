package com.hospital.service.nurseShift;

import com.hospital.commons.constans.response.IResponse;
import com.hospital.commons.converter.nurseShift.NurseShiftConverter;
import com.hospital.commons.domains.DTO.nurseShift.NurseShiftDTO;
import com.hospital.model.entity.nurseShift.NurseShiftEntity;
import com.hospital.model.repository.nurseShift.INurseShiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NurseShiftService {
    @Autowired
    public INurseShiftRepository iNurseShiftRepository;

    @Autowired
    public NurseShiftConverter nurseShiftConverter;

    public String createNurseShift(NurseShiftEntity nurseShiftEntity){
        try {
            Optional<NurseShiftEntity> find = iNurseShiftRepository.findById(nurseShiftEntity.getShiftId());
            if (!find.isPresent()){
                this.iNurseShiftRepository.save(nurseShiftEntity);
                return IResponse.CREATE_SUCCESS;
            }
            else {
                return IResponse.CREATE_FAIL;
            }
        }catch (Exception e){
            return IResponse.INTERNAL_SERVER_ERROR;
        }
    }
    public String deleteNurseShift(Integer shiftId){
        try {
            Optional<NurseShiftEntity> find = iNurseShiftRepository.findById(shiftId);
            if (find.isPresent()){
                this.iNurseShiftRepository.delete(find.get());
                return IResponse.DELETE_SUCCESS;
            }
            else {
                return IResponse.DELETE_FAIL;
            }
        }catch (Exception e){
            return IResponse.INTERNAL_SERVER_ERROR;
        }
    }

    public String updateNurseShift(NurseShiftDTO nurseShiftDTO){
        try {
            if (nurseShiftDTO == null || nurseShiftDTO.getShiftId()==null){
                return IResponse.NOT_FOUND;
            }
            Optional<NurseShiftEntity>find = iNurseShiftRepository.findById(nurseShiftDTO.getShiftId());
            if (find.isPresent()){
                NurseShiftEntity nurseShiftEntity = nurseShiftConverter.convertNurseShiftDTOToNurseShiftEntity(nurseShiftDTO);
                this.iNurseShiftRepository.save(nurseShiftEntity);
                return IResponse.UPDATE_SUCCESS;
            }
            else {
                return IResponse.UPDATE_FAIL;
            }
        }catch (Exception e){
            return IResponse.INTERNAL_SERVER_ERROR;
        }
    }
    public String findNurseShift(Integer shiftId){
        try {
            Optional<NurseShiftEntity>find = iNurseShiftRepository.findById(shiftId);
            if (find.isPresent()){
                String nurseShift = find.get().toString();
                return nurseShift;
            }else {
                return IResponse.NOT_FOUND;
            }
        }catch (Exception e){
            return IResponse.INTERNAL_SERVER_ERROR;
        }
    }

}
