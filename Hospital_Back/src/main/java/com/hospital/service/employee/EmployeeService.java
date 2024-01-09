package com.hospital.service.employee;

import com.hospital.commons.constans.endpoints.employee.IEmployeeEndPoints;
import com.hospital.commons.constans.response.IResponse;
import com.hospital.commons.converter.employee.EmployeeConverter;
import com.hospital.commons.domains.DTO.employee.EmployeeDTO;
import com.hospital.model.entity.employee.EmployeeEntity;
import com.hospital.model.repository.employee.IEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    public IEmployeeRepository iEmployeeRepository;

    @Autowired
    public EmployeeConverter employeeConverter;

    public String createEmployee(EmployeeEntity employeeEntity){
        try {
            Optional<EmployeeEntity>find = iEmployeeRepository.findById(employeeEntity.getEmployee_id());
            if (!find.isPresent()){
                this.iEmployeeRepository.save(employeeEntity);
                return IResponse.CREATE_SUCCESS;
            }
            else {
                return IResponse.CREATE_FAIL;
            }
        }
        catch (Exception e){
            return IResponse.INTERNAL_SERVER_ERROR;
        }
    }

    public String deleteEmployee(Integer employee_id){
        try {
            Optional<EmployeeEntity>find = iEmployeeRepository.findById(employee_id);
            if (find.isPresent()){
                this.iEmployeeRepository.delete(find.get());
                return IResponse.DELETE_SUCCESS;
            }
            else {
                return IResponse.DELETE_FAIL;
            }
        }
        catch (Exception e){
            return IResponse.INTERNAL_SERVER_ERROR;
        }
    }

    public String updateEmployee(EmployeeDTO employeeDTO){
        try {
            if (employeeDTO == null || employeeDTO.getEmployee_id()== null){
                return IResponse.NOT_FOUND;
            }
            Optional<EmployeeEntity>find = iEmployeeRepository.findById(employeeDTO.getEmployee_id());
            if (find.isPresent()){
                EmployeeEntity employeeEntity = employeeConverter.convertEmployeeDTOoEmployeeEntity(employeeDTO);
                this.iEmployeeRepository.save(employeeEntity);
                return IResponse.UPDATE_SUCCESS;
            }
            else {
                return IResponse.UPDATE_FAIL;
            }
        }
        catch (Exception e){
            return IResponse.INTERNAL_SERVER_ERROR;
        }
    }
    public String findEmployee(Integer employee_id){
        try {
            Optional<EmployeeEntity>find = iEmployeeRepository.findById(employee_id);
            if (find.isPresent()){
                String employee = find.get().toString();
                return employee;
            }
            else {
                return IResponse.NOT_FOUND;
            }
        }
        catch (Exception e){
            return IResponse.INTERNAL_SERVER_ERROR;
        }
    }
}


