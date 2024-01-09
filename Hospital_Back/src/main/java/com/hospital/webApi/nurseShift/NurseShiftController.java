package com.hospital.webApi.nurseShift;

import com.hospital.commons.constans.endpoints.nurseShift.INurseShiftEndPoints;
import com.hospital.commons.domains.DTO.nurseShift.NurseShiftDTO;
import com.hospital.model.entity.nurseShift.NurseShiftEntity;
import com.hospital.service.nurseShift.NurseShiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(INurseShiftEndPoints.NURSE_BASE_URL)
public class NurseShiftController {
    @Autowired
    private NurseShiftService nurseShiftService;

    @PostMapping(INurseShiftEndPoints.NURSE_CREATE_URL)
    public String createNurseShift(@RequestBody NurseShiftEntity nurseShiftEntity){
        return this.nurseShiftService.createNurseShift(nurseShiftEntity);
    }

    @DeleteMapping(INurseShiftEndPoints.NURSE_DELETE_URL)
    public String deleteNurseShift(@PathVariable Integer shiftId){
        return this.nurseShiftService.deleteNurseShift(shiftId);
    }

    @PutMapping(INurseShiftEndPoints.NURSE_UPDATE_URL)
    public String updateNurseShift(@RequestBody NurseShiftDTO nurseShiftDTO){
        return this.nurseShiftService.updateNurseShift(nurseShiftDTO);
    }

    @GetMapping(INurseShiftEndPoints.NURSE_GET_URL)
    public String findNurseShift(@PathVariable Integer shiftId){
        return this.nurseShiftService.findNurseShift(shiftId);
    }
}
