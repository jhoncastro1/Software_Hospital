package com.hospital.webApi.event;

import com.hospital.commons.constans.endpoints.event.IInsurancePolicyEndPoint;
import com.hospital.commons.domains.DTO.event.InsurancePolicyDTO;
import com.hospital.model.entity.event.InsurancePolicyEntity;
import com.hospital.service.event.InsurancePolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(IInsurancePolicyEndPoint.INSURANCE_POLICY_BASE_URL)
public class InsurancePolicyController {
    @Autowired
    private InsurancePolicyService insurancePolicyService;

    @PostMapping(IInsurancePolicyEndPoint.INSURANCE_POLICY_CREATE_URL)
    public String createInsurancePolicy(@RequestBody InsurancePolicyEntity insurancePolicyEntity){
        return this.insurancePolicyService.createInsurancePolicy(insurancePolicyEntity);
    }

    @DeleteMapping(IInsurancePolicyEndPoint.INSURANCE_POLICY_DELETE_URL)
    public String deleteEvent(@PathVariable Integer insurancePolicyNumber){
        return this.insurancePolicyService.deleteInsurancePolicy(insurancePolicyNumber);
    }

    @PutMapping(IInsurancePolicyEndPoint.INSURANCE_POLICY_UPDATE_URL)
    public String updateEvent(@RequestBody InsurancePolicyDTO insurancePolicyDTO){
        return this.insurancePolicyService.updateInsurancePolicy(insurancePolicyDTO);
    }

    @GetMapping(IInsurancePolicyEndPoint.INSURANCE_POLICY_GET_URL)
    public String findEvent(@PathVariable Integer insurancePolicyNumber){
        return this.insurancePolicyService.findInsurancePolicy(insurancePolicyNumber);
    }

}
