package com.hospital.service.event;

import com.hospital.commons.constans.response.IResponse;
import com.hospital.commons.converter.event.InsurancePolicyConverter;
import com.hospital.commons.domains.DTO.event.InsurancePolicyDTO;
import com.hospital.model.entity.event.InsurancePolicyEntity;
import com.hospital.model.repository.event.IInsurancePolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InsurancePolicyService {
    @Autowired
    public IInsurancePolicyRepository iInsurancePolicyRepository;

    @Autowired
    public InsurancePolicyConverter insurancePolicyConverter;

    public String createInsurancePolicy(InsurancePolicyEntity insurancePolicyEntity){
        try {
            Optional<InsurancePolicyEntity> find = iInsurancePolicyRepository.findById(insurancePolicyEntity.getInsurance_policy_number());
            if (!find.isPresent()){
                this.iInsurancePolicyRepository.save(insurancePolicyEntity);
                return IResponse.CREATE_SUCCESS;
            }else {return IResponse.CREATE_FAIL;}
        }catch (Exception e){return IResponse.INTERNAL_SERVER_ERROR;}
    }

    public String deleteInsurancePolicy(Integer insurancePolicyId){
        try {
            Optional<InsurancePolicyEntity> find = iInsurancePolicyRepository.findById(insurancePolicyId);
            if (find.isPresent()){
                this.iInsurancePolicyRepository.delete(find.get());
                return IResponse.DELETE_SUCCESS;
            }else {return IResponse.DELETE_FAIL;}
        }catch (Exception e){return IResponse.INTERNAL_SERVER_ERROR;}
    }

    public String updateInsurancePolicy(InsurancePolicyDTO insurancePolicyDTO){
        try {
            if (insurancePolicyDTO == null || insurancePolicyDTO.getInsuranceNumber() == null){
                return IResponse.NOT_FOUND;
            }
            Optional<InsurancePolicyEntity> find = iInsurancePolicyRepository.findById(insurancePolicyDTO.getInsuranceNumber());
            if (find.isPresent()){
                InsurancePolicyEntity insurancePolicyEntity = insurancePolicyConverter.convertInsurancePolicyDTOToInsurancePolicyEntity(insurancePolicyDTO);
                this.iInsurancePolicyRepository.save(insurancePolicyEntity);
                return IResponse.UPDATE_SUCCESS;
            }else {return IResponse.UPDATE_FAIL;}
        }catch (Exception e){return IResponse.INTERNAL_SERVER_ERROR;}
    }

    public String findInsurancePolicy(Integer insurancePolicyId){
        try{
            Optional<InsurancePolicyEntity> find = iInsurancePolicyRepository.findById(insurancePolicyId);
            if (find.isPresent()){
                return find.get().toString();
            }else {return IResponse.NOT_FOUND;}
        }catch (Exception e){return IResponse.INTERNAL_SERVER_ERROR;}
    }
}
