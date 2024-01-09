package com.hospital.commons.converter.event;

import com.hospital.commons.constans.response.IResponse;
import com.hospital.commons.domains.DTO.event.InsurancePolicyDTO;
import com.hospital.commons.helpers.HelperMapper;
import com.hospital.model.entity.event.InsurancePolicyEntity;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class InsurancePolicyConverter {
    public InsurancePolicyEntity convertInsurancePolicyDTOToInsurancePolicyEntity(InsurancePolicyDTO insurancePolicyDTO){
        InsurancePolicyEntity insurancePolicyEntity = new InsurancePolicyEntity();
        try{
            insurancePolicyEntity = HelperMapper.modelMapper().map(insurancePolicyDTO,insurancePolicyEntity .getClass());
        }
        catch (Exception e){
            log.error(IResponse.DOCUMENT_FAIL + e);
        }
        return insurancePolicyEntity;

    }
}
