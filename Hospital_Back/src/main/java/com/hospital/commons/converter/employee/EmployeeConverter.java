package com.hospital.commons.converter.employee;

import com.hospital.commons.constans.response.IResponse;
import com.hospital.commons.domains.DTO.employee.EmployeeDTO;
import com.hospital.commons.helpers.HelperMapper;
import com.hospital.model.entity.employee.EmployeeEntity;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class EmployeeConverter {

    public EmployeeEntity convertEmployeeDTOoEmployeeEntity(EmployeeDTO employeeDTO){
        EmployeeEntity employeeEntity = new EmployeeEntity();
        try {
            employeeEntity = HelperMapper.modelMapper().map(employeeDTO, employeeEntity.getClass());
        }
        catch (Exception e){
            log.error(IResponse.DOCUMENT_FAIL + e);
        }
        return employeeEntity;
    }

}
