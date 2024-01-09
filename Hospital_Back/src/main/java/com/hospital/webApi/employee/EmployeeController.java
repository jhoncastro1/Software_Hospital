package com.hospital.webApi.employee;

import com.hospital.commons.constans.endpoints.employee.IEmployeeEndPoints;
import com.hospital.commons.domains.DTO.employee.EmployeeDTO;
import com.hospital.model.entity.employee.EmployeeEntity;
import com.hospital.service.employee.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(IEmployeeEndPoints.EMPLOYEE_BASE_URL)
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping(IEmployeeEndPoints.EMPLOYEE_CREATE_URL)
    public String createEmployee(@RequestBody EmployeeEntity employeeEntity){
        return this.employeeService.createEmployee(employeeEntity);
    }

    @DeleteMapping(IEmployeeEndPoints.EMPLOYEE_DELETE_URL)
    public String deleteEmployee(@PathVariable Integer employee_id){
        return this.employeeService.deleteEmployee(employee_id);
    }
    @PutMapping(IEmployeeEndPoints.EMPLOYEE_UPDATE_URL)
    public String updateEmployee(@PathVariable EmployeeDTO employeeDTO){
         return this.employeeService.updateEmployee(employeeDTO);
    }
    @GetMapping(IEmployeeEndPoints.EMPLOYEE_GET_URL)
    public String findEmployee(@PathVariable Integer employee_id){
        return this.employeeService.findEmployee(employee_id);
    }
}
