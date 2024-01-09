package com.hospital.commons.constans.endpoints.employee;

public interface IEmployeeEndPoints {
    String EMPLOYEE_BASE_URL = "/v1/employee";
    String EMPLOYEE_CREATE_URL = "/create";
    String EMPLOYEE_DELETE_URL = "/delete/{employee_id}";
    String EMPLOYEE_UPDATE_URL = "/update";
    String EMPLOYEE_GET_URL = "/find/{employee_id}";

}
